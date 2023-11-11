import { changePasswordFieldValues } from '../../components/constants';
import { ChangeProfileField } from '../../components/ChangeProfileField';
import { tmpl } from '../ChangeProfile/changeProfile.tmpl';
import '../ChangeProfile/changeProfile.scss';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { validator } from '../../utils/Validator';
import UsersController from '../../controllers/UsersController';
import { IChangePasswordData } from '../../api/UsersApi';
import Router from '../../utils/Router';
import { Routes } from '../../../main';

export class ChangePassword extends Block {
  constructor() {
    super('div', { imgSrc: '/vite.svg' });
  }

  formValid() {
    let validAll = true;
    const formResult: Record<string, string> = {};
    (this.children.profileFields as ChangeProfileField[]).forEach(el => {
      if (!el.inputParam.isValid) {
        const { errorText, isValid } = validator(el.inputParam.name, el.inputParam.elementVal);
        if (!isValid) {
          validAll = false;
        }
        const copyEl = el;
        copyEl.element!.querySelector('.errorText')!.textContent = errorText;
      }
      if (el.inputParam.name !== 'newPasswordTwo') {
        formResult[el.inputParam.name] = el.inputParam.elementVal;
      }
    });
    if (validAll) {
      UsersController.changePassword(formResult as IChangePasswordData);
    }
    console.log(formResult);
  }

  init() {
    this.children.button = new Button({
      text: 'Сохранить',
      events: {
        click: () => {
          this.formValid();
        },
      },
    });

    this.children.profileFields = changePasswordFieldValues.map(field => new ChangeProfileField(field));
    this.children.profilePageButton = new Button({
      text: '<',
      events: {
        click: () => {
          Router.go(Routes.ProfileRoure);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, { imgSrc: '/vite.svg' });
  }
}
