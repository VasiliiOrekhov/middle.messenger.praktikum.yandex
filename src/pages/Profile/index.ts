import Handlebars from 'handlebars';
import { paths } from '../../components/constants';

import { Link } from '../../components/Link';
import { ProfileField } from '../../components/ProfileField';
import { tmpl } from './profile.tmpl.js';
import { profileFieldValues } from '../../components/constants';
import './profile.scss';
import Block from '../../utils/Block';

// export const Profile = () => {
//   const profileFields = profileFieldValues.map((field) => ProfileField(field));

//   return Handlebars.compile(tmpl)({
//     ChatPageLeftLink: Link({ to: paths.chat, text: '<' }),
//     profileName: 'Имя',
//     imgSrc: '/vite.svg',
//     profileFields,
//     ChangeProfilePageLink: Link({ to: paths.changeprofile, text: 'Изменить данные' }),
//     ChangePasswordPageLink: Link({ to: paths.changeprofile, text: 'Изменить пароль' }),
//     ChatPageLink: Link({ to: paths.chat, text: 'Выйти' }),
//   });
// };

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
      to: paths.changeprofile,
      text: 'Изменить пароль',
    });
    this.children.chatPageLink = new Link({ to: paths.chat, text: 'Выйти' });
    this.children.chatPageLeftLink = new Link({ to: paths.chat, text: '<' });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
