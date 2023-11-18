export const tmpl = `

    <div class='SelectedChatModule'>
    {{{popupCreateUser}}}
    {{{popupDeleteUser}}}
    {{#if id}}
      <div class='header'>
        <div class='headerInfo'>
          <img class='headerInfo_img' src={{imgSrc}} alt="IMG"/>
          <p class='headerInfo_name'>{{data.title}}</p>
        </div>
        {{{addUserButton}}}
        {{{deleteUserButton}}}
        {{{deleteChatButton}}}
      </div>
      <div class='chat'>
        здесь будут сообщения
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
