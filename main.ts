import { NotFound } from './src/pages/NotFound';
import { Profile } from './src/pages/Profile';
import { Login } from './src/pages/Login';
import { Singin } from './src/pages/Singin';
import { FixProblem } from './src/pages/FixProblem';
import { ChangeProfile } from './src/pages/ChangeProfile';
import { ChangePassword } from './src/pages/ChangePassword';
import { Chat } from './src/pages/Chat';
import Router from './src/utils/Router';

import AuthController from './src/controllers/AuthController';
import ChatsController from './src/controllers/ChatsController';

// const ROUTES = {
//   '/profile': new Profile().render(),
//   '*': new NotFound().render(),
//   '/login': new Login().render(),
//   '/registration': new Singin().render(),
//   '/fix': new FixProblem().render(),
//   '/changeprofile': new ChangeProfile().render(),
//   '/changepassword': new ChangePassword().render(),
//   '/chat': new Chat().render(),
// };

export enum Routes {
  LoginRoute = '/login',
  RegistrationRoure = '/registration',
  ProfileRoure = '/profile',
  FixRoute = '/fix',
  ChangeProfileRoute = '/changeprofile',
  ChangePasswordRoure = '/changepassword',
  ChatRoute = '/chat',
  NotFoundRoute = '*',
}

// window.addEventListener('DOMContentLoaded', () => {
//   const root = document.getElementById('app');

//   if (root) {
//     const component = ROUTES[window.location.pathname] || ROUTES['*'];
//     root.append(component);
//   }
// });

window.addEventListener('DOMContentLoaded', async () => {
  Router.use(Routes.LoginRoute, Login)
    .use(Routes.RegistrationRoure, Singin)
    .use(Routes.ProfileRoure, Profile)
    .use(Routes.FixRoute, FixProblem)
    .use(Routes.ChangeProfileRoute, ChangeProfile)
    .use(Routes.ChangePasswordRoure, ChangePassword)
    .use(Routes.ChatRoute, Chat)
    .use(Routes.NotFoundRoute, NotFound);

  let isProtectedRoute = true;
  console.log(isProtectedRoute);

  switch (window.location.pathname) {
    case Routes.LoginRoute:
    case Routes.RegistrationRoure:
      isProtectedRoute = false;
      break;
  }
  // if (window.location.pathname === Routes.LoginRoute || window.location.pathname === Routes.RegistrationRoure) {
  //   isProtectedRoute = false;
  // }
  // const test = await AuthController.fetchUser();
  // console.log('test', test);
  try {
    await AuthController.fetchUser();
    // await ChatsController.getChats();

    console.log('mainTRY', isProtectedRoute);
    Router.start();

    if (!isProtectedRoute) {
      console.log('goProfile');
      Router.go(Routes.ProfileRoure);
    }
  } catch (e) {
    console.log(e, 'Here', isProtectedRoute);
    Router.start();

    if (isProtectedRoute) {
      console.log('goLogin');
      Router.go(Routes.LoginRoute);
    }
  }
});
