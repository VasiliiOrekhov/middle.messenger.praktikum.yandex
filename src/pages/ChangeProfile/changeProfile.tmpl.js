export const tmpl = `
  <div class='changeProfilePage'>
    <div class='leftsideModule'>
      {{{ChatPageLeftLink}}}
    </div>
    <div class='basicContainer'>
      <img class='profileImg' src={{imgSrc}}/>
      <form class='changeProfile_form'>
        {{#each profileFields}}
          {{{this}}}
        {{/each}}
        <button class='submitButton' type='submit' >Сохранить</button>
      </form>
    </div>
  </div>
`;
