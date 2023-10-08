import Handlebars from 'handlebars';
import { tmpl } from './myMessage.tmpl';
import './myMessage.scss';

type MyMessageProps = {
  text: String;
};

export const MyMessage = (props: MyMessageProps) => {
  return Handlebars.compile(tmpl)(props);
};
