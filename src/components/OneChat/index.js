import Handlebars from 'handlebars';
import { tmpl } from './oneChat.tmpl';
import './oneChat.scss';

export const OneChat = (props) => {
  return Handlebars.compile(tmpl)(props);
};
