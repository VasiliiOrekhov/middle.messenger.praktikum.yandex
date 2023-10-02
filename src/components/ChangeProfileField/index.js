import Handlebars from 'handlebars';
import { tmpl } from './changeProfileField.tmpl';
import './changeProfileField.scss';

export const ChangeProfileField = (props) => {
  return Handlebars.compile(tmpl)(props);
};
