import Handlebars from 'handlebars';
import { paths } from '../../components/constants';
import { Link } from '../../components/Link';
import { ChangeProfileField } from '../../components/ChangeProfileField';
import { tmpl } from './changeProfile.tmpl';
import { profileFieldValues } from '../../components/constants';
import './changeProfile.scss';

export const ChangeProfile = () => {
  const profileFields = profileFieldValues.map((field) => ChangeProfileField(field));

  return Handlebars.compile(tmpl)({
    ChatPageLeftLink: Link({ to: paths.profile, text: '<' }),
    imgSrc: '/vite.svg',
    profileFields,
  });
};
