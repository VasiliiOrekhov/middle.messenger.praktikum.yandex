import { tmpl } from './oneChat.tmpl';
import Block from '../../utils/Block';
import './oneChat.scss';

type OneChatProps = {
  imgSrc: string;
  name: string;
  text: string;
  time: string;
  counter: number;
};

export class OneChat extends Block {
  constructor(props: OneChatProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
