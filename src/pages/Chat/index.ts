import { OneChat } from '../../components/OneChat';
import { MyMessage } from '../../components/MyMessage';
import { FriendMessage } from '../../components/FriendMessage';
import Block from '../../utils/Block';
import { tmpl } from './chat.tmpl';
import './chat.scss';
import { Button } from '../../components/Button';
import { InputOnly } from '../../components/InputOnly';

const testChatList = [
  {
    imgSrc: '/vite.svg',
    name: 'Anna',
    text: 'test message',
    time: '13:58',
    counter: 5,
  },
  {
    imgSrc: '/vite.svg',
    name: 'Anna',
    text: 'test message',
    time: '13:58',
    counter: 5,
  },
];

export class Chat extends Block {
  constructor() {
    super('div', { selectedChat_imgSrc: '/vite.svg', selectedChat_name: 'Anna' });
  }

  init() {
    this.children.chatList = testChatList.map((props) => new OneChat(props));
    this.children.button = new Button({
      text: 'Отправить',
      events: {
        click: (e) => {
          e.preventDefault();
          console.log({ message: (this.children.input as InputOnly).inputParam.elementVal });
        },
      },
    });
    this.children.input = new InputOnly({
      name: 'message',
      events: {
        blur: function () {},
      },
    });
    this.children.firstMessage = new MyMessage({ text: 'Сообщение 1' });
    this.children.secondMessage = new FriendMessage({ text: 'Сообщение 2' });
    this.children.thirdMessage = new MyMessage({ text: 'Сообщение 3' });
    this.children.fourMessage = new FriendMessage({ text: 'Сообщение 4' });
  }

  render() {
    return this.compile(tmpl, { selectedChat_imgSrc: '/vite.svg' });
  }
}
