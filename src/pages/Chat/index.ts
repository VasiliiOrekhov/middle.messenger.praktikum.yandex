import { IGetChat } from '../../api/ChatsApi';
import { PopupCreateChat } from '../../modules/PopupCreateChat/index';
import { OneChat } from '../../components/OneChat';
import Block from '../../utils/Block';
import { tmpl } from './chat.tmpl';
import './chat.scss';
import { Button } from '../../components/Button';
import ChatsController from '../../controllers/ChatsController';
import { State, store, withStore } from '../../utils/Store';
import { SelectChat } from '../../modules/SelectChat';

type IBaseChatProps = IGetChat[] & {
  selectedChatId: number | null;
};
export class BaseChat extends Block {
  constructor(props: IBaseChatProps) {
    super({
      ...props,
    });
  }

  selectChat(id: number) {
    this.setProps({ selectedChatId: id });
  }

  async init() {
    await ChatsController.getChats();

    this.children.chatList = store
      .getState()
      .chats!.map(props => new OneChat({ ...props, selectChat: this.selectChat.bind(this) }));

    this.children.createChatButton = new Button({
      text: 'Создать чат',
      events: {
        click: () => {
          document.querySelector('.popup_createChat')!.classList.add('popup_open');
        },
      },
    });
    this.children.popupCreateChat = new PopupCreateChat();
    this.children.selectChat = new SelectChat({ id: 0, deleteChat: this.selectChat.bind(this) });
  }

  protected componentDidUpdate(): boolean {
    console.log(Object.values(this.props));
    this.children.chatList = store
      .getState()
      .chats!.map(props => new OneChat({ ...props, selectChat: this.selectChat.bind(this) }));

    this.children.selectChat = new SelectChat({
      id: this.props.selectedChatId,
      deleteChat: this.selectChat.bind(this),
    });

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
