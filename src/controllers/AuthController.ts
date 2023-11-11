import { Routes } from '../../main';
import { AuthApi, ISignInData, ISignUpData } from '../api/AuthApi';
import Router from '../utils/Router';
import { store } from '../utils/Store';

class AuthController {
  private api = new AuthApi();

  async signin(data: ISignInData) {
    try {
      await this.api.signin(data);

      await this.fetchUser();

      Router.go(Routes.ProfileRoure);
    } catch (error) {
      console.log(error);
    }
  }

  async signup(data: ISignUpData) {
    try {
      await this.api.signup(data);

      Router.go(Routes.ProfileRoure);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.api.logout();

      store.set('user', undefined);

      Router.go(Routes.LoginRoute);
    } catch (error) {
      console.log(error);
    }
  }

  async fetchUser() {
    try {
      const user = await this.api.getUser();
      store.set('user', user);
      // setTimeout(() => store.set('user', user), 0);
    } catch (error) {
      console.log(error);
    }
  }
}

export default new AuthController();
