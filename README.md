# next-safari-reproduction
Reproduction of an issue with nextjs and styled-components in safari

To reproduce:

1. Run `yarn; yarn build; yart start;
2. Head to http://localhost:3000 in *safari*
3. Hold shift and hit the reload button.
4. Notice the text has dissappeared.

What I *think* is happening:

In production mode, on the *client-side* styled-components doesn't write to the `innerHTML` of its style tags, instead it uses `document.styleSheets[0].addRule()` et al. to set styles (clearning the `innerHTML` that was done on the server render).

When you shift-reload, the `@import`-ed font file is still being fetched when the rewriting happens. This seems to cause Safari to melt down.
