import { tmpl } from './oneChat.tmpl';
import Block from '../../utils/Block';
import './oneChat.scss';
import { IGetChat } from '../../api/ChatsApi';

export class OneChat extends Block {
  constructor(props: IGetChat) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
