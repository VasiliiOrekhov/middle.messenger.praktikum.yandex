import { tmpl } from './selectChat.tmpl';
import './selectChat.scss';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { PopupCreateUser } from '../PopupAddUser';
import { InputOnly } from '../../components/InputOnly';
import { MyMessage } from '../../components/MyMessage';
import { FriendMessage } from '../../components/FriendMessage';
import { PopupDeleteUser } from '../PopupDeleteUser';
import ChatsController from '../../controllers/ChatsController';
import { IGetChat } from '../../api/ChatsApi';
import MessageController from '../../controllers/MessageController';
import { RESOURCES_URL } from '../../components/constants';

type SelectChatProps = {
  id: number;
  data: IGetChat;
  deleteChat: (id: number) => void;
};
export class SelectChat extends Block {
  constructor(props: SelectChatProps) {
    super(props);
  }

  init(): void {
    this.children.popupCreateUser = new PopupCreateUser({ chatId: this.props.id });
    this.children.popupDeleteUser = new PopupDeleteUser({ chatId: this.props.id });

    this.children.addUserButton = new Button({
      text: 'Добавить пользователя',
      events: {
        click: () => {
          document.querySelector('.popup_createUser')!.classList.add('popup_open');
        },
      },
    });
    this.children.deleteUserButton = new Button({
      text: 'Удалить пользователя',
      events: {
        click: () => {
          document.querySelector('.popup_deleteUser')!.classList.add('popup_open');
        },
      },
    });
    this.children.deleteChatButton = new Button({
      text: 'Удалить чат',
      events: {
        click: () => {
          ChatsController.deleteChat({ chatId: this.props.id });
          this.props.deleteChat(0);
        },
      },
    });

    this.children.button = new Button({
      text: 'Отправить',
      events: {
        click: e => {
          e.preventDefault();
          const InputValue = (this.children.input as InputOnly).inputParam.elementVal;
          if (InputValue) {
            MessageController.sendMessage(this.props.id, InputValue);
          }
        },
      },
    });
    this.children.firstMessage = new MyMessage({ text: 'Сообщение 1' });
    this.children.secondMessage = new FriendMessage({ text: 'Сообщение 2' });
    this.children.thirdMessage = new MyMessage({ text: 'Сообщение 3' });
    this.children.fourMessage = new FriendMessage({ text: 'Сообщение 4' });

    this.children.input = new InputOnly({
      name: 'message',
      events: {
        blur() {},
      },
    });
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      imgSrc: this.props.data?.avatar
        ? `
       ${RESOURCES_URL}/${this.props.data?.avatar}`
        : '',
    });
  }
}
