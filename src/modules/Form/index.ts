import { tmpl } from './form.tmpl';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';
import type { InputProps } from '../../components/Input';
// import type { LinkProps } from '../../components/Link';
import './form.scss';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { validator } from '../../utils/Validator';
import { ISignInData, ISignUpData } from '../../api/AuthApi';
import Router from '../../utils/Router';

type FormProps = {
  title: string;
  inputsArr: InputProps[];
  link: { to: string; text: string };
  buttonText: string;
  fetch: (data: ISignInData | ISignUpData) => void;
};

export class Form extends Block {
  constructor(props: FormProps) {
    super(props);
  }

  formValid() {
    let validAll = true;
    const formResult: Record<string, string> = {};
    (this.children.inputFields as Input[]).forEach(el => {
      if (!el.inputParam.isValid) {
        const { errorText, isValid } = validator(el.inputParam.name, el.inputParam.elementVal);
        if (!isValid) {
          validAll = false;
        }
        const copyEl = el;
        copyEl.element!.querySelector('.errorText')!.textContent = errorText;
      }
      if (el.inputParam.name !== 'passwordTwo') {
        formResult[el.inputParam.name] = el.inputParam.elementVal;
      }
    });
    console.log(formResult);
    if (validAll) {
      this.props.fetch(formResult);
    }
  }

  init() {
    this.children.link = new Link({ to: this.props.link.to, text: this.props.link.text });
    this.children.linkButton = new Button({
      text: this.props.link.text,
      events: {
        click: () => {
          Router.go(this.props.link.to);
        },
      },
    });
    this.children.button = new Button({
      text: this.props.buttonText,
      events: {
        click: () => {
          this.formValid();
        },
      },
    });

    this.children.inputFields = this.props.inputsArr.map((inputProp: InputProps) => new Input(inputProp));
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
