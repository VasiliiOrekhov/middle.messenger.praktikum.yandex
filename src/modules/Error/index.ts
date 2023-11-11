import { tmpl } from './error.tmpl';
import { Link } from '../../components/Link';
import type { LinkProps } from '../../components/Link';
import './error.scss';
import Block from '../../utils/Block';

type ErrorProps = {
  errorNumber: number;
  errorText: string;
  link: LinkProps;
};

export class Error extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }

  init() {
    this.children.link = new Link({ to: this.props.link.to, text: this.props.link.text });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
