export const tmpl = `
  <div class='profilePage'>
    <div class='leftsideModule'>
      {{{chatPageButton}}}
    </div>
    <div class='basicContainer'>
      <img class='profileImg' src={{imgSrc}}/>
      <div class='profileName'>{{profileName}}</div>
      {{email}}
      {{#each profileFields}}
            {{{this}}}
      {{/each}}
      <div class='linkContainer'>
        {{{changeProfileButton}}}
        {{{changePasswordButton}}}
        {{{logoutButton}}}
      </div>
    </div>
  </div>
`;
