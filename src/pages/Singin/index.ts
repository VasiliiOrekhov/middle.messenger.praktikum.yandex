import { Form } from '../../modules/Form';
import { registrationInput } from '../../components/constants';
import { tmpl } from './singin.tmpl';
import './singin.scss';
import Block from '../../utils/Block';
import AuthController from '../../controllers/AuthController';
import { ISignUpData } from '../../api/AuthApi';
import { Routes } from '../../../main';

export class Singin extends Block {
  constructor() {
    super('div', {});
  }

  fetch(data: ISignUpData) {
    AuthController.signup(data);
  }

  init() {
    this.children.regForm = new Form({
      title: 'Регистрация',
      inputsArr: registrationInput,
      buttonText: 'Зарегистрироваться',
      link: { to: Routes.LoginRoute, text: 'Войти' },
      fetch: this.fetch,
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
