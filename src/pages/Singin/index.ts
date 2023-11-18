import { Form } from '../../modules/Form';
import { registrationInput } from '../../components/constants';
import { tmpl } from './singin.tmpl';
import './singin.scss';
import Block from '../../utils/Block';
import AuthController from '../../controllers/AuthController';
import { ISignInData, ISignUpData } from '../../api/AuthApi';
import { Routes } from '../../../main';
import ChatsController from '../../controllers/ChatsController';

export class Singin extends Block {
  constructor() {
    super({});
  }

  async fetch(data: ISignUpData) {
    await AuthController.signup(data);
    await ChatsController.getChats();
  }

  init() {
    this.children.regForm = new Form({
      title: 'Регистрация',
      inputsArr: registrationInput,
      buttonText: 'Зарегистрироваться',
      link: { to: Routes.LoginRoute, text: 'Войти' },
      fetch: this.fetch as (data: ISignUpData | ISignInData) => void,
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
