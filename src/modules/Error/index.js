import Handlebars from 'handlebars';
import { tmpl } from './error.tmpl';
import { Link } from '../../components/Link';
import './error.scss';

export const Error = (props) => {
  return Handlebars.compile(tmpl)({
    errorNumber: props.errorNumber,
    errorText: props.errorText,
    PageLink: Link({ to: props.link.path, text: props.link.text }),
  });
};
