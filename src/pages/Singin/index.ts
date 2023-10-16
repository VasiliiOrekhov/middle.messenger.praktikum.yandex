import { Form } from '../../modules/Form';
import { registrationInput } from '../../components/constants';

import { tmpl } from './singin.tmpl';
import './singin.scss';
import Block from '../../utils/Block';

export class Singin extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.loginForm = new Form({
      title: 'Регистрация',
      inputsArr: registrationInput,
      buttonText: 'Зарегистрироваться',
      link: { to: '/login', text: 'Войти' },
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
