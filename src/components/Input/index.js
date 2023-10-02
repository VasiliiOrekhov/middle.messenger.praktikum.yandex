import Handlebars from 'handlebars';
import { tmpl } from './input.tmpl';
import './input.scss';

export const Input = (props) => {
  return Handlebars.compile(tmpl)(props);
};
