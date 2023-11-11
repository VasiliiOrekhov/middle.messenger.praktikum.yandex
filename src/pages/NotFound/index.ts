import { tmpl } from './notFound.tmpl';
import { paths } from '../../components/constants';
import { Error } from '../../modules/Error';
import Block from '../../utils/Block';

export class NotFound extends Block {
  // constructor() {
  //   super('div', {});
  // }

  init() {
    this.children.error = new Error({
      errorNumber: 404,
      errorText: 'Не туда попали',
      link: { to: paths.login, text: 'Назад' },
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
