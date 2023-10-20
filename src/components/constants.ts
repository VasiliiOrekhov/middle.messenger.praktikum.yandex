import { Input } from './Input';

const events = {
  blur(this: Input) {
    console.log(this);
    (this! as Input).isValid();
  },
  // blur: function () {
  //   this.isValid();
  // },
};

export const loginInput = [
  {
    type: 'text',
    placeholder: 'Логин',
    name: 'login',
    events,
  },
  {
    type: 'password',
    placeholder: 'Пароль',
    name: 'password',
    events,
  },
];

export const registrationInput = [
  {
    type: 'email',
    placeholder: 'Почта',
    name: 'email',
    events,
  },
  {
    type: 'text',
    placeholder: 'Логин',
    name: 'login',
    events,
  },
  {
    type: 'text',
    placeholder: 'Имя',
    name: 'first_name',
    events,
  },
  {
    type: 'text',
    placeholder: 'Фамилия',
    name: 'second_name',
    events,
  },
  {
    type: 'tel',
    placeholder: 'Телефон',
    name: 'phone',
    events,
  },
  {
    type: 'password',
    placeholder: 'Пароль',
    name: 'password',
    events,
  },
  {
    type: 'password',
    placeholder: 'Пароль (еще раз)',
    name: 'passwordTwo',
    events,
  },
];

export const profileFieldValues = [
  {
    fieldName: 'Почта',
    fieldValue: 'email',
    name: 'email',
    events,
  },
  {
    fieldName: 'Логин',
    fieldValue: 'login',
    name: 'login',
    events,
  },
  {
    fieldName: 'Имя',
    fieldValue: 'first_name',
    name: 'first_name',
    events,
  },
  {
    fieldName: 'Фамилия',
    fieldValue: 'second_name',
    name: 'second_name',
    events,
  },
  {
    fieldName: 'Имя в чате',
    fieldValue: 'display_name',
    name: 'display_name',
    events,
  },
  {
    fieldName: 'Телефон',
    fieldValue: 'phone',
    name: 'phone',
    events,
  },
];

export const changePasswordFieldValues = [
  {
    fieldName: 'Старый пароль',
    fieldValue: 'oldPassword',
    name: 'oldPassword',
    events,
  },
  {
    fieldName: 'Новый пароль',
    fieldValue: 'newPassword',
    name: 'newPassword',
    events,
  },
  {
    fieldName: 'Повторите новый пароль',
    fieldValue: 'newPasswordTwo',
    name: 'newPasswordTwo',
    events,
  },
];

export const paths = {
  login: '/login',
  registration: '/registration',
  chat: '/chat',
  profile: '/profile',
  changeprofile: '/changeprofile',
  changepassword: '/changepassword',
  noPath: '*',
  fix: '/fix',
};
