import Handlebars from 'handlebars';
import { tmpl } from './profileField.tmpl';
import './profileField.scss';

export const ProfileField = (props) => {
  return Handlebars.compile(tmpl)(props);
};
