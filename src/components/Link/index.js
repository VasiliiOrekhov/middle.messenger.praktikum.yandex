import Handlebars from 'handlebars';
import { tmpl } from './link.tmpl';
import './link.scss';

export const Link = (props) => {
  return Handlebars.compile(tmpl)(props);
};
