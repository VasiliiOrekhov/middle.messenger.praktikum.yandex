export const loginInput = [
  { type: 'text', placeholder: 'Логин', name: 'login' },
  { type: 'password', placeholder: 'Пароль', name: 'password' },
];

export const registrationInput = [
  { type: 'email', placeholder: 'Почта', name: 'email' },
  { type: 'text', placeholder: 'Логин', name: 'login' },
  { type: 'text', placeholder: 'Имя', name: 'first_name' },
  { type: 'text', placeholder: 'Фамилия', name: 'second_name' },
  { type: 'tel', placeholder: 'Телефон', name: 'phone' },
  { type: 'password', placeholder: 'Пароль', name: 'password' },
  { type: 'password', placeholder: 'Пароль (еще раз)', name: 'passwordTwo' },
];

export const profileFieldValues = [
  { fieldName: 'Почта', fieldValue: 'email' },
  { fieldName: 'Логин', fieldValue: 'login' },
  { fieldName: 'Имя', fieldValue: 'first_name' },
  { fieldName: 'Фамилия', fieldValue: 'second_name' },
  { fieldName: 'Имя в чате', fieldValue: 'display_name' },
  { fieldName: 'Телефон', fieldValue: 'phone' },
];

export const changePasswordFieldValues = [
  { fieldName: 'Старый пароль', fieldValue: 'oldPassword' },
  { fieldName: 'Новый пароль', fieldValue: 'newPassword' },
  { fieldName: 'Повторите новый пароль', fieldValue: 'newPasswordTwo' },
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
