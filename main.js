import { NotFound } from './src/pages/NotFound';
import { Profile } from './src/pages/Profile';
import { Login } from './src/pages/Login';
import { Singin } from './src/pages/Singin';
import { FixProblem } from './src/pages/FixProblem';
import { ChangeProfile } from './src/pages/ChangeProfile';
import { ChangePassword } from './src/pages/ChangePassword';
import { Chat } from './src/pages/Chat';

const ROUTES = {
  '/profile': new Profile().render(),
  '*': new NotFound().render(),
  '/login': new Login().render(),
  '/registration': new Singin().render(),
  '/fix': new FixProblem().render(),
  '/changeprofile': new ChangeProfile().render(),
  '/changepassword': new ChangePassword().render(),
  '/chat': new Chat().render(),
};

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const component = ROUTES[window.location.pathname] || ROUTES['*'];
    root.append(component);
  }
});
