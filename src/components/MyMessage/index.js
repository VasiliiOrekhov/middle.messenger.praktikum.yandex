import Handlebars from 'handlebars';
import { tmpl } from './myMessage.tmpl';
import './myMessage.scss';

export const MyMessage = (props) => {
  return Handlebars.compile(tmpl)(props);
};
