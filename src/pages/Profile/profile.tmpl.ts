export const tmpl = `
  <div class='profilePage'>
    <div class='leftsideModule'>
      {{{chatPageLeftLink}}}
    </div>
    <div class='basicContainer'>
      <img class='profileImg' src={{imgSrc}}/>
      <div class='profileName'>{{profileName}}</div>
      {{#each profileFields}}
            {{{this}}}
      {{/each}}
      <div class='linkContainer'>
        {{{changeProfilePageLink}}}
        {{{changePasswordPageLink}}}
        {{{chatPageLink}}}
      </div>
    </div>
  </div>
`;
