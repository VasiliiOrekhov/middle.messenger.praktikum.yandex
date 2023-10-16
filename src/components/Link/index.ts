import { tmpl } from './link.tmpl';
import './link.scss';
import Block from '../../utils/Block';

export type LinkProps = {
  to: string;
  text: string;
};

export class Link extends Block {
  constructor(props: LinkProps) {
    super('a', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
