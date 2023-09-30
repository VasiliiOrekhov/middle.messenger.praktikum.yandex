import { NotFound } from './src/pages/NotFound';
import { Profile } from './src/pages/Profile';
import { Login } from './src/pages/Login';
import { Singin } from './src/pages/Singin';
import { FixProblem } from './src/pages/FixProblem';
import { ChangeProfile } from './src/pages/ChangeProfile';
import { ChangePassword } from './src/pages/ChangePassword';
import { Chat } from './src/pages/Chat';

const ROUTES = {
  '*': NotFound(),
  '/profile': Profile(),
  '/login': Login(),
  '/registration': Singin(),
  '/fix': FixProblem(),
  '/changeprofile': ChangeProfile(),
  '/changepassword': ChangePassword(),
  '/chat': Chat(),
};

window.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('app');

  if (root) {
    const component = ROUTES[window.location.pathname] || NotFound();
    root.innerHTML = component;
  }
});
