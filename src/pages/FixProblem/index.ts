import Handlebars from 'handlebars';
import { tmpl } from './fixProblem.tmpl';
import { paths } from '../../components/constants';
import { Error } from '../../modules/Error';

export const FixProblem = () => {
  return Handlebars.compile(tmpl)({
    FixProblemError: Error({
      errorNumber: 500,
      errorText: 'Мы уже фиксим',
      link: { to: paths.login, text: 'Назад' },
    }),
  });
};
