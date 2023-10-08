import Handlebars from 'handlebars';
import { tmpl } from './error.tmpl';
import { Link } from '../../components/Link';
import type { LinkProps } from '../../components/Link';
import './error.scss';

type ErrorProps = {
  errorNumber: number;
  errorText: string;
  link: LinkProps;
};

export const Error = (props: ErrorProps) => {
  return Handlebars.compile(tmpl)({
    errorNumber: props.errorNumber,
    errorText: props.errorText,
    PageLink: Link({ to: props.link.to, text: props.link.text }),
  });
};
