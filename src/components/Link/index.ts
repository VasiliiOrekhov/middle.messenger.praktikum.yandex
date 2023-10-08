import Handlebars from 'handlebars';
import { tmpl } from './link.tmpl';
import './link.scss';

export type LinkProps = {
  to: string;
  text: string;
};

export const Link = (props: LinkProps) => {
  return Handlebars.compile(tmpl)(props);
};
