import Handlebars from 'handlebars';
import { tmpl } from './input.tmpl';
import './input.scss';

export type InputProps = {
  placeholder: string;
  type: string;
  name: string;
};

export const Input = (props: InputProps) => {
  return Handlebars.compile(tmpl)(props);
};
