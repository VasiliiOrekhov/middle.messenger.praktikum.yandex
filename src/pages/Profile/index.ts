import { Routes } from '../../../main';
import { profileFieldValues } from '../../components/constants';
import { ProfileField } from '../../components/ProfileField';
import { tmpl } from './profile.tmpl.js';
import './profile.scss';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import AuthController from '../../controllers/AuthController';
import { State, withStore, store } from '../../utils/Store';
import Router from '../../utils/Router';
import { IUser } from '../../api/ChatsApi';

export class BaseProfile extends Block {
  constructor() {
    super({});
  }

  init() {
    console.log(store.getState());
    this.children.profileFields = profileFieldValues.map(field => {
      return new ProfileField({
        fieldName: field.fieldName,
        fieldValue: store.getState().user![field.fieldValue as keyof IUser] as string,
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

  render() {
    return this.compile(tmpl, {
      imgSrc: store.getState().user!.avatar
        ? `
    https://ya-praktikum.tech/api/v2/resources/${store.getState().user!.avatar}
    `
        : '',
    });
  }
}

function mapStateToProps(state: State) {
  return { ...state.user };
}

export const Profile = withStore(mapStateToProps)(BaseProfile);
