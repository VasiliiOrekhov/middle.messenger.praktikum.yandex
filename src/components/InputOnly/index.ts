import { tmpl } from './input.tmpl';
import Block from '../../utils/Block';

export type InputProps = {
  name: string;
  events: {
    blur?: () => void;
  };
};

export class InputOnly extends Block {
  inputParam: { name: string; elementVal: string };

  constructor(props: InputProps) {
    super('div', props);
    this.inputParam = {
      name: this.props.name,
      elementVal: (this.element!.querySelector('.inputField') as HTMLInputElement)!.value,
    };
  }

  get inputValue() {
    return this.inputParam;
  }

  setInputVal(val: string) {
    this.inputParam.elementVal = val;
  }

  _addEvents() {
    Object.keys(this.props.events).forEach((eventName) => {
      (this.element!.querySelector('.inputField') as HTMLInputElement)!.addEventListener(
        eventName,
        (e) => {
          this.setInputVal((e.target as HTMLInputElement).value);
          this.props.events[eventName].apply(this);
        },
      );
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
