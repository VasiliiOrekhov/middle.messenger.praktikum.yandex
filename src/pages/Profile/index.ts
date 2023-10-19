import { paths } from '../../components/constants';
import { Link } from '../../components/Link';
import { ProfileField } from '../../components/ProfileField';
import { tmpl } from './profile.tmpl.js';
import { profileFieldValues } from '../../components/constants';
import './profile.scss';
import Block from '../../utils/Block';

export class Profile extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.profileFields = profileFieldValues.map((field) => new ProfileField(field));
    this.children.changeProfilePageLink = new Link({
      to: paths.changeprofile,
      text: 'Изменить данные',
    });
    this.children.changePasswordPageLink = new Link({
      to: paths.changepassword,
      text: 'Изменить пароль',
    });
    this.children.chatPageLink = new Link({ to: paths.chat, text: 'Выйти' });
    this.children.chatPageLeftLink = new Link({ to: paths.chat, text: '<' });
  }

  render() {
    return this.compile(tmpl, { imgSrc: '/vite.svg' });
  }
}
