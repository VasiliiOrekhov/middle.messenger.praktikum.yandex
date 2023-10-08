import Handlebars from 'handlebars';
import { tmpl } from './changeProfileField.tmpl';
import './changeProfileField.scss';

type ChangeProfileFieldProps = {
  fieldName: string;
  fieldValue: string;
  name: string;
};

export const ChangeProfileField = (props: ChangeProfileFieldProps) => {
  return Handlebars.compile(tmpl)(props);
};
