import Handlebars from 'handlebars';
import { Form } from '../../modules/Form';
import { loginInput, paths } from '../../components/constants';

import { tmpl } from './login.tmpl';
import './login.scss';

export const Login = () => {
  return Handlebars.compile(tmpl)({
    loginForm: Form({
      title: 'Вход',
      inputsArr: loginInput,
      buttonText: 'Авторизоваться',
      link: { path: paths.registration, text: 'Нет аккаунта?' },
    }),
  });
};
