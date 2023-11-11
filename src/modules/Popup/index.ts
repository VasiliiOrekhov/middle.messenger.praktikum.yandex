import { tmpl } from './popupImg.tmpl';
// import { Input } from '../../components/Input';
// import { Link } from '../../components/Link';
// import type { InputProps } from '../../components/Input';
// import type { LinkProps } from '../../components/Link';
import './popupImg.scss';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import UsersController from '../../controllers/UsersController';
// import { validator } from '../../utils/Validator';
// import { ISignInData, ISignUpData } from '../../api/AuthApi';
// import Router from '../../utils/Router';

// type FormProps = {
//   title: string;
//   inputsArr: InputProps[];
//   link: { to: string; text: string };
//   buttonText: string;
//   fetch: (data: ISignInData | ISignUpData) => void;
// };

export class PopupImg extends Block {
  constructor() {
    super('div', {});
  }

  // formValid() {
  //   let validAll = true;
  //   const formResult: Record<string, string> = {};
  //   (this.children.inputFields as Input[]).forEach(el => {
  //     if (!el.inputParam.isValid) {
  //       const { errorText, isValid } = validator(el.inputParam.name, el.inputParam.elementVal);
  //       if (!isValid) {
  //         validAll = false;
  //       }
  //       const copyEl = el;
  //       copyEl.element!.querySelector('.errorText')!.textContent = errorText;
  //     }
  //     if (el.inputParam.name !== 'passwordTwo') {
  //       formResult[el.inputParam.name] = el.inputParam.elementVal;
  //     }
  //   });
  //   console.log(formResult);
  //   if (validAll) {
  //     this.props.fetch(formResult);
  //   }
  // }

  init() {
    this.children.submitButton = new Button({
      text: 'Сохранить ихображение',
      events: {
        click: async () => {
          const imgInputValue = this.element!.querySelector('.inputImg')!;
          const formData = new FormData();
          console.log((imgInputValue as HTMLInputElement).value);
          formData.append('avatar', imgInputValue as HTMLFormElement);
          await UsersController.changeProfileAvatar(formData);
        },
      },
    });
    this.children.closeButton = new Button({
      text: 'Закрыть',
      events: {
        click: () => {
          document.querySelector('.popupImg')!.classList.remove('popupImg_open');
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
