import { Form } from '../../modules/Form';
import { loginInput } from '../../components/constants';
import { tmpl } from './login.tmpl';
import './login.scss';
import Block from '../../utils/Block';
import AuthController from '../../controllers/AuthController';
import { ISignInData } from '../../api/AuthApi';
import Router from '../../utils/Router';
import { Routes } from '../../../main';

export class Login extends Block {
  constructor() {
    super({});
  }

  fetch(data: ISignInData) {
    AuthController.signin(data);
  }

  init() {
    this.children.loginForm = new Form({
      title: 'Вход',
      inputsArr: loginInput,
      buttonText: 'Авторизоваться',
      link: { to: Routes.RegistrationRoure, text: 'Нет аккаунта?' },
      fetch: this.fetch,
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
