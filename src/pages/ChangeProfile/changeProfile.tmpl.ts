export const tmpl = `
  <div class='changeProfilePage'>
    <div class='leftsideModule'>
      {{{ChatPageLeftLink}}}
    </div>
    <div class='basicContainer'>
      <input type="file" id="fileInput"  class='inputImg' name='avatar' >
      <label for="fileInput">
        <img  class='profileImg' src={{imgSrc}} alt="Choose File">
      </label>
      <form class='changeProfile_form'>
        {{#each profileFields}}
          {{{this}}}
        {{/each}}
      </form>
      {{{button}}}
    </div>
  </div>
`;
