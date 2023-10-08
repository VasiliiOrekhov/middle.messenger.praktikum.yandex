import Handlebars from 'handlebars';
import { OneChat } from '../../components/OneChat';
import { MyMessage } from '../../components/MyMessage';
import { FriendMessage } from '../../components/FriendMessage';

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

export const Chat = () => {
  const chatList = testChatList.map((props) => OneChat(props));
  return Handlebars.compile(tmpl)({
    chatList,
    selectedChat_imgSrc: '/vite.svg',
    selectedChat_name: 'Anna',
    firstMessage: MyMessage({ text: 'Сообщение 1' }),
    secondMessage: FriendMessage({ text: 'Сообщение 2' }),
    thirdMessage: MyMessage({ text: 'Сообщение 3' }),
    fourMessage: FriendMessage({ text: 'Сообщение 4' }),
  });
};
