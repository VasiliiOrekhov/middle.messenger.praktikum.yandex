import Handlebars from 'handlebars';
import { tmpl } from './notFound.tmpl';
import { paths } from '../../components/constants';
import { Error } from '../../modules/Error';

export const NotFound = () => {
  return Handlebars.compile(tmpl)({
    NotFoundError: Error({
      errorNumber: '404',
      errorText: 'Не туда попали',
      link: { path: paths.login, text: 'Назад' },
    }),
  });
};
