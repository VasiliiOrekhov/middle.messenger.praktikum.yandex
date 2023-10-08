import Handlebars from 'handlebars';
import { tmpl } from './form.tmpl';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';
import type { InputProps } from '../../components/Input';
import type { LinkProps } from '../../components/Link';
import './form.scss';

type FormProps = {
  title: string;
  inputsArr: InputProps[];
  link: LinkProps;
  buttonText: string;
};

export const Form = (props: FormProps) => {
  const inputFields = props.inputsArr.map((inputProp) => Input(inputProp));
  return Handlebars.compile(tmpl)({
    inputFields,

    PageLink: Link({ to: props.link.to, text: props.link.text }),
    ...props,
  });
};
