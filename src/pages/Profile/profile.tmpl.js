export const tmpl = `
  <main class='profilePage'>
    <div class='leftsideModule'>
      {{{ChatPageLeftLink}}}
    </div>
    <div class='basicContainer'>
      <img class='profileImg' src={{imgSrc}}/>
      <div class='profileName'>{{profileName}}</div>
      {{#each profileFields}}
            {{{this}}}
      {{/each}}
      <div class='linkContainer'>
        {{{ChangeProfilePageLink}}}
        {{{ChangePasswordPageLink}}}
        {{{ChatPageLink}}}
      </div>
    </div>
  </main>
`;
