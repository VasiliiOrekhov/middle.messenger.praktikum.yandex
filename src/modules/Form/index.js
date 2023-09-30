import Handlebars from 'handlebars';

import { tmpl } from './form.tmpl';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';

import './form.scss';

export const Form = (props) => {
  const inputFields = props.inputsArr.map((inputProps) => Input(inputProps));
  return Handlebars.compile(tmpl)({
    inputFields,

    PageLink: Link({ to: props.link.path, text: props.link.text }),
    ...props,
  });
};
