export const tmpl = `
  <div class='chatPage'>
    <div class='ChatListModule'>
      <div class='linkContainer'>
        <a  class="custom-link" href="/profile">Профиль ></a>
      </div>
      <Input class='chatListInput' placeholder="Поиск"/>
      <div class='chatList'>
        {{#each chatList}}
          {{{this}}}
        {{/each}}
      </div>
    </div>
    <div class='SelectedChatModule'>
      <div class='header'>
        <div class='headerInfo'>
          <img class='headerInfo_img' src={{selectedChat_imgSrc}}/>
          <p class='headerInfo_name'>{{selectedChat_name}}</p>
        </div>
        <button class='button'>Меню ></button>
      </div>
      <div class='chat'>
        {{{firstMessage}}}
        {{{secondMessage}}}
        {{{thirdMessage}}}
        {{{fourMessage}}}
      </div>
      <form class='footer'>
        <input class='fileInput' type='file'>
        <input class='messageInput' type='text'name='message'>
        <button type='submit' class='button'>Отправить</button>
      </form>
    </div>
  </div>
`;
