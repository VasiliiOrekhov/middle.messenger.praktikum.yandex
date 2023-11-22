import { Form } from '../../modules/Form';
import { loginInput } from '../../components/constants';
import { tmpl } from './login.tmpl';
import './login.scss';
import Block from '../../utils/Block';
import AuthController from '../../controllers/AuthController';
import { ISignInData } from '../../api/AuthApi';
import { Routes } from '../../../main';
import ChatsController from '../../controllers/ChatsController';

export class Login extends Block {
  constructor() {
    super({});
  }

  async fetch(data: ISignInData) {
    await AuthController.signin(data);
    await ChatsController.getChats();
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
