export const tmpl = `
  <div class='chatPage'>
    {{{popupCreateUser}}}
    {{{popupCreateChat}}}
    <div class='ChatListModule'>
      <div class='linkContainer'>
        {{{createChatButton}}}
        <a  class="custom-link" href="/profile">Профиль ></a>
        
      </div>
      <Input class='chatListInput' placeholder="Поиск"/>
      <div class='chatList'>
        {{#each chatList}}
          {{{this}}}
        {{/each}}
      </div>
    </div>
    {{{selectChat}}}   
  </div>
`;
