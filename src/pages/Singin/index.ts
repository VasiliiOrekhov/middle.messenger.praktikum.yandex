import Handlebars from 'handlebars';
import { Form } from '../../modules/Form';
import { registrationInput } from '../../components/constants';

import { tmpl } from './singin.tmpl';
import './singin.scss';

export const Singin = () => {
  return Handlebars.compile(tmpl)({
    loginForm: Form({
      title: 'Регистрация',
      inputsArr: registrationInput,
      buttonText: 'Зарегистрироваться',
      link: { to: '/login', text: 'Войти' },
    }),
  });
};
