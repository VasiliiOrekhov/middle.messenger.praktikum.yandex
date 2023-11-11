import { OneChat } from '../../components/OneChat';
import { MyMessage } from '../../components/MyMessage';
import { FriendMessage } from '../../components/FriendMessage';
import Block from '../../utils/Block';
import { tmpl } from './chat.tmpl';
import './chat.scss';
import { Button } from '../../components/Button';
import { InputOnly } from '../../components/InputOnly';
import ChatsController from '../../controllers/ChatsController';
import { PopupCreateUser } from '../../modules/PopupCreateUser';
import { State, store, withStore } from '../../utils/Store';
import { IGetChat } from '../../api/ChatsApi';

// const testChatList = [
//   {
//     imgSrc: '/vite.svg',
//     name: 'Anna',
//     text: 'test message',
//     time: '13:58',
//     counter: 5,
//   },
//   {
//     imgSrc: '/vite.svg',
//     name: 'Anna',
//     text: 'test message',
//     time: '13:58',
//     counter: 5,
//   },
// ];

export class BaseChat extends Block {
  constructor() {
    super('div', { selectedChat_imgSrc: '/vite.svg', selectedChat_name: 'Anna' });
  }

  componentDidMount(): void {
    console.log('componentDidMount BaseChat');

    ChatsController.getChats();
  }

  init() {
    console.log(store.getState());
    this.children.chatList = [].map(props => new OneChat(props));
    this.children.createChatButton = new Button({
      text: 'Создать чат',
      events: {
        click: () => {
          ChatsController.createChat({ title: 'new chat' });
        },
      },
    });
    this.children.popupCreateUser = new PopupCreateUser();

    this.children.addUserButton = new Button({
      text: 'Добавить пользователя',
      events: {
        click: () => {
          document.querySelector('.popup_createUser')!.classList.add('popup_open');
        },
      },
    });
    this.children.button = new Button({
      text: 'Отправить',
      events: {
        click: e => {
          e.preventDefault();
          console.log({ message: (this.children.input as InputOnly).inputParam.elementVal });
        },
      },
    });
    // this.children.input = new InputOnly({
    //   name: 'message',
    //   events: {
    //     blur() {},
    //   },
    // });
    this.children.firstMessage = new MyMessage({ text: 'Сообщение 1' });
    this.children.secondMessage = new FriendMessage({ text: 'Сообщение 2' });
    this.children.thirdMessage = new MyMessage({ text: 'Сообщение 3' });
    this.children.fourMessage = new FriendMessage({ text: 'Сообщение 4' });
  }

  protected componentDidUpdate(): boolean {
    this.children.chatList = this.props.map(props => new OneChat(props));

    return true;
  }

  render() {
    return this.compile(tmpl, { ...this.props, selectedChat_imgSrc: '/vite.svg' });
  }
}

function mapStateToProps(state: State) {
  return { ...state.chats };
}

export const Chat = withStore(mapStateToProps)(BaseChat);
