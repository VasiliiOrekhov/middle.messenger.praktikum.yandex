# Messanger App

**проект:** онлайн мессенджер.  
**Функционал проекта:** регистрация, авторизация, отправка сообщений/файлов, просмотр чатов, редактирование профиля и пароля. Весь функционал разработан с использованием нативного TS (JS) без фреймворков. Раздача статики через Express. Архитектура и структура исполнена в компонентном подходе.

## Tech Stack

**Client:** Html, Sсss, Typescript
**Server:** Node, Express
**Tests:** Chai, Mocha, Sinon


## Run Locally

Clone the project

```bash
  git clone https://github.com/VasiliiOrekhov/middle.messenger.praktikum.yandex
```

Install dependencies

```bash
  npm
```

Start the dev version:

```bash
  npm run dev
```

Start project on express server:

```bash
  npm run start
```

Run eslint:

```bash
  npm run eslint
```

Run stylelint:

```bash
  npm run stylelint
```

Run test:

```bash
  npm run test
```

## Demo

[Netlify](https://gorgeous-llama-524e16.netlify.app)

## Page links

login: '/',
registration: '/sign-up',
chat: '/messenger',
profile: '/profile',
changeprofile: '/changeprofile',
changepassword: '/changepassword',
404: '\*',
500: '/fix',
