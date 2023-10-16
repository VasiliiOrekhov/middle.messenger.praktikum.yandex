import { Form } from '../../modules/Form';
import { loginInput, paths } from '../../components/constants';
import { tmpl } from './login.tmpl';
import './login.scss';
import Block from '../../utils/Block';

export class Login extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.loginForm = new Form({
      title: 'Вход',
      inputsArr: loginInput,
      buttonText: 'Авторизоваться',
      // buttonEvents: {
      //   click: () => {
      //     console.log(this);
      //   },
      // },
      link: { to: paths.registration, text: 'Нет аккаунта?' },
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
