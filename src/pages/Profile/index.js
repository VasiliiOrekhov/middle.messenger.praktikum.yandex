import Handlebars from 'handlebars';
import { paths } from '../../components/constants';

import { Link } from '../../components/Link';
import { ProfileField } from '../../components/ProfileField';
import { tmpl } from './profile.tmpl';
import { profileFieldValues } from '../../components/constants';
import './profile.scss';

export const Profile = () => {
  const profileFields = profileFieldValues.map((field) => ProfileField(field));

  return Handlebars.compile(tmpl)({
    ChatPageLeftLink: Link({ to: paths.chat, text: '<' }),
    profileName: 'Имя',
    imgSrc: '/vite.svg',
    profileFields,
    ChangeProfilePageLink: Link({ to: paths.changeprofile, text: 'Изменить данные' }),
    ChangePasswordPageLink: Link({ to: paths.changeprofile, text: 'Изменить пароль' }),
    ChatPageLink: Link({ to: paths.chat, text: 'Выйти' }),
  });
};
