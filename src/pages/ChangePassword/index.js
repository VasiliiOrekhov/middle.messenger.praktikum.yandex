import Handlebars from 'handlebars';
import { paths } from '../../components/constants';
import { Link } from '../../components/Link';
import { tmpl } from '../ChangeProfile/changeProfile.tmpl';
import { ChangeProfileField } from '../../components/ChangeProfileField';
import { changePasswordFieldValues } from '../../components/constants';
import '../ChangeProfile/changeProfile.scss';

export const ChangePassword = () => {
  const profileFields = changePasswordFieldValues.map((field) => ChangeProfileField(field));

  return Handlebars.compile(tmpl)({
    ChatPageLeftLink: Link({ to: paths.profile, text: '<' }),
    imgSrc: '/vite.svg',
    profileFields,
  });
};
