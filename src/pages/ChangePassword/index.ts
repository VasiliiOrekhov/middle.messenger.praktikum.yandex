import { paths, changePasswordFieldValues } from '../../components/constants';
import { Link } from '../../components/Link';
import { ChangeProfileField } from '../../components/ChangeProfileField';
import { tmpl } from '../ChangeProfile/changeProfile.tmpl';
import '../ChangeProfile/changeProfile.scss';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { validator } from '../../utils/validator';

export class ChangePassword extends Block {
  constructor() {
    super('div', { imgSrc: '/vite.svg' });
  }

  formValid() {
    const formResult: Record<string, string> = {};
    (this.children.profileFields as ChangeProfileField[]).forEach(el => {
      if (!el.inputParam.isValid) {
        const { errorText } = validator(el.inputParam.name, el.inputParam.elementVal);
        const copyEl = el;
        copyEl.element!.querySelector('.errorText')!.textContent = errorText;
      }
      if (el.inputParam.name !== 'newPasswordTwo') {
        formResult[el.inputParam.name] = el.inputParam.elementVal;
      }
    });
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

    this.children.ChatPageLeftLink = new Link({ to: paths.profile, text: '<' });
    this.children.profileFields = changePasswordFieldValues.map(field => new ChangeProfileField(field));
  }

  render() {
    return this.compile(tmpl, { imgSrc: '/vite.svg' });
  }
}
