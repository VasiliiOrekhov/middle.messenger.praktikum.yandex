import Block from '../../utils/Block';
import Handlebars from 'handlebars';
import { tmpl } from './changeProfileField.tmpl';
import './changeProfileField.scss';
import { Validator } from '../../utils/Validator';

// type ChangeProfileFieldProps = {
//   fieldName: string;
//   fieldValue: string;
//   name: string;
// };

export const ChangeProfileField2 = (props: ChangeProfileFieldProps) => {
  return Handlebars.compile(tmpl)(props);
};

type ChangeProfileFieldProps = {
  fieldName: string;
  fieldValue: string;
  name: string;
  events: {
    blur?: () => void;
  };
};

// export type InputProps = {
//   placeholder: string;
//   type: string;
//   name: string;
//   events: {
//     blur?: () => void;
//   };
// };

export class ChangeProfileField extends Block {
  inputParam: { name: string; elementVal: string; isValid: boolean };

  constructor(props: ChangeProfileFieldProps) {
    super('div', props);
    this.inputParam = {
      name: this.props.name,
      elementVal: this.element!.querySelector('input')!.value,
      isValid: false,
    };
  }

  get isValid() {
    const { isValid, errorText } = Validator(this.inputParam.name, this.inputParam.elementVal);
    this.setInputIsValid(isValid);
    this.setProps({ errorText: errorText });
    return isValid;
  }

  get inputValue() {
    return this.inputParam;
  }
  setInputVal(val: string) {
    this.inputParam.elementVal = val;
  }
  setInputIsValid(param: boolean) {
    this.inputParam.isValid = param;
  }

  _addEvents() {
    Object.keys(this.props.events).forEach((eventName) => {
      this.element!.querySelector('input')!.addEventListener(eventName, (e) => {
        this.setInputVal((e.target as HTMLInputElement).value);
        this.props.events[eventName].apply(this);
      });
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
