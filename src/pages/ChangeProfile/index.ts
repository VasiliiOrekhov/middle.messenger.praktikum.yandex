import { paths, profileFieldValues } from '../../components/constants';
import { Link } from '../../components/Link';
import { ChangeProfileField } from '../../components/ChangeProfileField';
import { tmpl } from './changeProfile.tmpl';
import './changeProfile.scss';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { validator } from '../../utils/validator';

export class ChangeProfile extends Block {
  constructor() {
    super('div', {});
  }

  formValid() {
    const formResult: Record<string, string> = {};
    (this.children.profileFields as ChangeProfileField[]).forEach(el => {
      if (!el.inputParam.isValid) {
        const { errorText } = validator(el.inputParam.name, el.inputParam.elementVal);
        const copyEl = el;
        copyEl.element!.querySelector('.errorText')!.textContent = errorText;
      }
      formResult[el.inputParam.name] = el.inputParam.elementVal;
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
    this.children.profileFields = profileFieldValues.map(field => new ChangeProfileField(field));
  }

  render() {
    return this.compile(tmpl, { imgSrc: '/vite.svg' });
  }
}
