import { tmpl } from './fixProblem.tmpl';
import { paths } from '../../components/constants';
import { Error } from '../../modules/Error';
import Block from '../../utils/Block';

export class FixProblem extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.error = new Error({
      errorNumber: 500,
      errorText: 'Мы уже фиксим',
      link: { to: paths.login, text: 'Назад' },
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
