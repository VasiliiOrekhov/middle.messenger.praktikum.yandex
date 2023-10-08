import Handlebars from 'handlebars';
import { tmpl } from './profileField.tmpl';
import './profileField.scss';

type ProfileFieldProps = {
  fieldName: string;
  fieldValue: string;
};

export const ProfileField = (props: ProfileFieldProps) => {
  return Handlebars.compile(tmpl)(props);
};
