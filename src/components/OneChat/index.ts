import Handlebars from 'handlebars';
import { tmpl } from './oneChat.tmpl';
import './oneChat.scss';

type OneChatProps = {
  imgSrc: string;
  name: string;
  text: string;
  time: string;
  counter: number;
};

export const OneChat = (props: OneChatProps) => {
  return Handlebars.compile(tmpl)(props);
};
