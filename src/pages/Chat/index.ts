import { OneChat } from '../../components/OneChat';
import { MyMessage } from '../../components/MyMessage';
import { FriendMessage } from '../../components/FriendMessage';
import Block from '../../utils/Block';
import { tmpl } from './chat.tmpl';
import './chat.scss';

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
    this.children.firstMessage = new MyMessage({ text: 'Сообщение 1' });
    this.children.secondMessage = new FriendMessage({ text: 'Сообщение 2' });
    this.children.thirdMessage = new MyMessage({ text: 'Сообщение 3' });
    this.children.fourMessage = new FriendMessage({ text: 'Сообщение 4' });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
