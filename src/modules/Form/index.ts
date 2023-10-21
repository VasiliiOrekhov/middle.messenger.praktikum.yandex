import { tmpl } from './form.tmpl';
import { Input } from '../../components/Input';
import { Link } from '../../components/Link';
import type { InputProps } from '../../components/Input';
import type { LinkProps } from '../../components/Link';
import './form.scss';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { validator } from '../../utils/validator';

type FormProps = {
  title: string;
  inputsArr: InputProps[];
  link: LinkProps;
  buttonText: string;
};

export class Form extends Block {
  constructor(props: FormProps) {
    super('div', props);
  }

  formValid() {
    const formResult: Record<string, string> = {};
    (this.children.inputFields as Input[]).forEach(el => {
      if (!el.inputParam.isValid) {
        const { errorText } = validator(el.inputParam.name, el.inputParam.elementVal);
        const copyEl = el;
        copyEl.element!.querySelector('.errorText')!.textContent = errorText;
      }
      if (el.inputParam.name !== 'passwordTwo') {
        formResult[el.inputParam.name] = el.inputParam.elementVal;
      }
    });
    console.log(formResult);
  }

  init() {
    this.children.link = new Link({ to: this.props.link.to, text: this.props.link.text });
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
