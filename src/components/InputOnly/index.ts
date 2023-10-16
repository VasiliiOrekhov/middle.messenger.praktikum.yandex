import Block from '../../utils/Block';

interface InputProps {
  events: {
    focus: () => void;
  };
}

export class InputOnly extends Block {
  constructor(props: InputProps) {
    super('input', props);
  }

  get isValid() {
    return (this.element! as HTMLInputElement).value.length > 10;
  }

  render() {
    return this.compile('', this.props);
  }
}
