import { Routes } from '../../../main';
import { profileFieldValues } from '../../components/constants';
import { ProfileField } from '../../components/ProfileField';
import { tmpl } from './profile.tmpl.js';
import './profile.scss';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import AuthController from '../../controllers/AuthController';
import { State, withStore } from '../../utils/Store';
import Router from '../../utils/Router';

export class BaseProfile extends Block {
  async init() {
    await AuthController.fetchUser();

    this.children.profileFields = profileFieldValues.map(field => {
      return new ProfileField({
        fieldName: field.fieldName,
        fieldValue: this.props[field.fieldValue],
      });
    });
    this.children.logoutButton = new Button({
      text: 'Выйти',
      events: {
        click: () => {
          AuthController.logout();
        },
      },
    });
    this.children.changePasswordButton = new Button({
      text: 'Изменить пароль',
      events: {
        click: () => {
          Router.go(Routes.ChangePasswordRoure);
        },
      },
    });
    this.children.changeProfileButton = new Button({
      text: 'Изменить данные',
      events: {
        click: () => {
          Router.go(Routes.ChangeProfileRoute);
        },
      },
    });
    this.children.chatPageButton = new Button({
      text: '<',
      events: {
        click: () => {
          Router.go(Routes.ChatRoute);
        },
      },
    });
  }

  protected componentDidUpdate(): boolean {
    this.children.profileFields = profileFieldValues.map(field => {
      return new ProfileField({
        fieldName: field.fieldName,
        fieldValue: this.props[field.fieldValue],
      });
    });
    return true;
  }

  render() {
    return this.compile(tmpl, { imgSrc: '/vite.svg' });
  }
}

function mapStateToProps(state: State) {
  return { ...state.user };
}

export const Profile = withStore(mapStateToProps)(BaseProfile);
