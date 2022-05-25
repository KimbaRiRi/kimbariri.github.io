---
category: Getting Started
title: 
favicon: ⚙️
---

## Pages vs Notes
Site content is separated into two main categories:
1. **Pages** are static pages such as `about.md`, saved in the `_pages` directory
2. **Notes** are your connected knowledge, saved in `_notes` directory

Both notes and pages support wikilinks. When you build your site, these markdown files are converted to html and exported to the `_site` directory, which makes up your live website.

### Page Exceptions
`index.md` is saved in the root directory so that I can use an include to `README.md` and avoid having to write the same content twice. Feel free to move this to `_pages` if you remove the include—the page will still render in the root directory once you build the site.

## Note Features
Since the notes are set up as a Jekyll collection rather than a post item, you cannot use built in category or tag features. The advantage of this is being able to name your note anything you want, rather than adhering to Jekyll's requirement to add the date to a post filename.

Since notes are technically a collection of pages, you can create your own variables. I've configured a custom variable called `category:` that you can use on notes. More info in [[Note Formatting]].

## Assets
All assets must be saved in the `assets` directory or they will not be built by Jekyll. By default, the Assets folder contains the following subfolders:
- `css`
- `images`
- `js`

Save all attachments to the `assets/images` directory. More on this in [[Obsidian Setup]].

## Note Naming
You can use dashes in your note names, like this: [[your-first-note]]

I applied the fix in [this issue](https://github.com/maximevaillancourt/digital-garden-jekyll-template/issues/47) to make this possible.

## Style
The site theme is controlled by `css/style.css`. Read documentation on the current theme in [[Style & Theme]].

## Local Environment
If you want to set up Jekyll on your local environment, I recommend following [this guide](https://mac.install.guide/ruby/4.html). It covers Git, Ruby, homebrew, and why you shouldn't use sudo for everything.

[Maxime's tutorial](https://maximevaillancourt.com/blog/setting-up-your-own-digital-garden-with-jekyll) also has a great section on setting up your local environment.