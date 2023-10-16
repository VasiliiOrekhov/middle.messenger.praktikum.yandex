export const tmpl = `
<div class="container">
    <h3 class="title">{{title}}</h3>
    <form class="inputForm">
        {{#each inputFields}}
            {{{this}}}
        {{/each}}
    </form>
    <div class='buttotContainer'>
        {{{button}}}
        {{{link}}}
    </div>
</div>
`;
