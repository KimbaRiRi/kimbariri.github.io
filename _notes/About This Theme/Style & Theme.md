---
title: 
category: Development
favicon: 🎨
---

I'm writing these notes as I start to develop the custom CSS for this template.

I'm removing the SCSS because I'm a big fan of pure CSS variables. I'm also removing [normalize.css](https://github.com/necolas/normalize.css) because it was last updated in 2018, and a lot has changed since then. I'm a bit of a minimalist when it comes to CSS and working with browser defaults.

The new stylesheet will live in `assets/css`, organized according to the [Jekyll documentation](https://jekyllrb.com/docs/step-by-step/07-assets/). I also added an empty `js` folder just in case and an `images` folder for attachments. This way all assets are automatically built to `_site` without the need for additional configuration.

- Moved all notes-graph CSS to the main stylesheet
	- uses `--primary-color` variable
- Moved notes-graph js to `assets/js`

# Typefaces
I chose [Inter](https://rsms.me/inter/) and [Wremena](https://typefaces.temporarystate.net/preview/Wremena). Inter is the UI typeface for Obsidian, and the variable font version has lots of fun features.

For dates, I've enabled alternate numbers, slashed zeroes, and case sensitive forms. I've also enabled superscript, fractions, and disambiguation glyph set by default.

Wremena is used for headings. I've enabled tabular numbers, just in case you add some numbers to your note titles.

# CSS Changelog
- Body has a max width now
- Font size is calculated to be intrinsically responsive
- No more inline styles, everything has a class or unique element
- Semantic HTML, removed deprecated tags
	- Rearranged `<article>` to only contain article text and nothing more
	- Backlinks are now an `<aside>`
- Separated font embeds to `fonts.css`
- Headings have hyphenated word breaks for large text on small devices
- Increased width for breakpoint to avoid squished grids
- Lots of variables in `:root` based on reducing opacity for the same primary theme color
- Added `display: grid` liberally when codeblocks broke the grid