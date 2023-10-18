import { tmpl } from './myMessage.tmpl';
import Block from '../../utils/Block';

import './myMessage.scss';

type MyMessageProps = {
  text: String;
};

export class MyMessage extends Block {
  constructor(props: MyMessageProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
