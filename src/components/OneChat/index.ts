import { tmpl } from './oneChat.tmpl';
import Block from '../../utils/Block';
import './oneChat.scss';
import { IGetChat } from '../../api/ChatsApi';

type OneChatProps = IGetChat & {
  selectChat: (id: number) => void;
};
export class OneChat extends Block {
  constructor(props: OneChatProps) {
    super({
      ...props,
      events: {
        click: () => {
          props.selectChat(this.props.id);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      imgSrc: this.props.avatar
        ? `
      https://ya-praktikum.tech/api/v2/resources/${this.props.avatar}`
        : '',
    });
  }
}
