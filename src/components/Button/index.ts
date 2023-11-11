import { tmpl } from './button.tmpl';
import Block from '../../utils/Block';

export type ButtonProps = {
  text: string;
  events: {
    click: (e: MouseEvent) => void;
  };
};

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
