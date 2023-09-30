import Handlebars from 'handlebars';
import { tmpl } from './friendMessage.tmpl';
import './friendMessage.scss';

export const FriendMessage = (props) => {
  return Handlebars.compile(tmpl)(props);
};
