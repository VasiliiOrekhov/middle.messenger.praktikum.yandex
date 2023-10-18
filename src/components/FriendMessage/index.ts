import Block from '../../utils/Block';
import { tmpl } from './friendMessage.tmpl';
import './friendMessage.scss';

type FriendMessageProps = { text: string };

export class FriendMessage extends Block {
  constructor(props: FriendMessageProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
