export const tmpl = `

    <div class='SelectedChatModule'>
    {{{popupCreateUser}}}
    {{{popupDeleteUser}}}
    {{#if id}}
      <div class='header'>
        <div class='headerInfo'>
          <img class='headerInfo_img' src={{selectedChat_imgSrc}}/>
          <p class='headerInfo_name'>{{selectedChat_name}}</p>
        </div>
        {{{addUserButton}}}
        {{{deleteUserButton}}}
        {{{deleteChatButton}}}
      </div>
      <div class='chat'>
        {{{firstMessage}}}
        {{{secondMessage}}}
        {{{thirdMessage}}}
        {{{fourMessage}}}
      </div>
      <form class='footer'>
        <input class='fileInput' type='file'>
        {{{input}}}
        {{{button}}}
      </form>
    {{else}}
      <h1>выберите чат</h1>
    {{/if}}
      
    </div>
`;
