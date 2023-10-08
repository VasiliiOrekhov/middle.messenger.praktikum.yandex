import Handlebars from 'handlebars';
import { tmpl } from './friendMessage.tmpl';
import './friendMessage.scss';

type FriendMessageProps = { text: string };

export const FriendMessage = (props: FriendMessageProps) => {
  return Handlebars.compile(tmpl)(props);
};
