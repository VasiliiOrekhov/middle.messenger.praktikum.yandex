import { tmpl } from './popup.tmpl';
import './popup.scss';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
// import UsersController from '../../controllers/UsersController';
import { Input } from '../../components/Input';
import { validator } from '../../utils/Validator';
import ChatsController from '../../controllers/ChatsController';

export class PopupCreateUser extends Block {
  constructor() {
    super('div', {});
  }

  addUser() {
    const input = this.children.input as Input;
    const { errorText, isValid } = validator(input.inputParam.name, input.inputParam.elementVal);
    const copyEl = input;
    copyEl.element!.querySelector('.errorText')!.textContent = errorText;
    if (isValid) {
      console.log(input.inputParam.elementVal);
      // add vasvas
      ChatsController.addUsers({ users: [1348231], chatId: 33116 });
    }
  }

  init() {
    this.children.input = new Input({
      placeholder: 'Логин',
      type: 'text',
      name: 'login',
      events: {
        blur() {
          const inputInstance = this as unknown as Input;
          const { isValid, errorText } = validator(inputInstance.inputParam.name, inputInstance.inputParam.elementVal);
          inputInstance.element!.querySelector('.errorText')!.textContent = errorText;
          inputInstance.setInputIsValid(isValid);
        },
      },
    });
    this.children.submitButton = new Button({
      text: 'Добавить пользователя',
      events: {
        click: () => {
          this.addUser();
        },
      },
    });
    this.children.closeButton = new Button({
      text: 'Закрыть',
      events: {
        click: () => {
          document.querySelector('.popup_createUser')!.classList.remove('popup_open');
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
