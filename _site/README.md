## What is this?

This Jekyll template is a way to organize and publish your thoughts from [Obsidian](https://obsidian.md/) to the web, complete with backlinks, notes graph, and wikilink support. This template was modified by [Megumi Tanaka](https://megumi.co) in 2021. Here's <a href="https://garden.megu.space/your-first-note.html#installation" class="internal-link">how to install this template</a>. View this template on [Github](https://github.com/meewgumi/green-web-template).

Based on the [Jekyll digital garden template](https://github.com/maximevaillancourt/digital-garden-jekyll-template) by Maxime Vaillancourt.

## How is this different?

### New Features

-   **Obsidian embeds!** Yes, images formatted `![[like this]]` will render automatically with the correct asset path!
-   **Categories!** (not clickable yet)
-   **Emoji favicons!** Configure at site level or page level with `favicon:` variable
-   **Archive Page!** An index of all notes, date updated, category, and excerpt.
-   **Tables!** Table syntax matches Obsidian and Github with [Commonmark Github Flavored Markdown](https://github.com/github/jekyll-commonmark-ghpages) integration
-   **Obsidian Templates!** Easily create a new note or page with the proper front matter variables.
-   **Green Bok Choy Theme!** This is the public version of the theme I'll be using for my personal site [megu.space](https://megu.space)

## What makes this a green template?

1.  🥬 The theme is literally **green**
2.  ♻️ Webhost and deployments run on renewable energy—**green web hosting**!
3.  🚀 Jekyll is a flat file system, meaning **pages load faster** with less demand on server resources
4.  🖥️  Obsidian is an offline Markdown editor. Your edits happen on your local computer instead of using cloud autosave functions, so writing content has a **reduced computing cost**
5.  🪴 Borrowing from gardening as a metaphor, this publishing system is built with the principles of [digital gardening](https://github.com/MaggieAppleton/digital-gardeners) in mind.

## Why not Netlify?

I'm on a mission to build **carbon-neutral websites**, and unfortunately Netlify hasn't made any statements on this front. I'm in the process of switching all my web projects to [Krystal UK](https://krystal.uk/green). Even though Netlify is really easy to use and I love their mission to make a faster, flat-file web, I'm going to go about it in a different way.

### Green Web Hosting

[Krystal UK](https://krystal.uk/green) is powered by 100% renewables, meaning 🌊 hydro, 😎 solar, and 🍃 wind powered energy. On top of that, they invest in tree replanting and other environmental campaigns.

[DeployHQ](https://www.deployhq.com/r/nx7qct) is owned by Krystal UK and runs on the same 100% renewable cloud services. It's very easy to connect Git Repositories to any server and automatically deploy.

Dreamhost is technically [carbon neutral](https://www.dreamhost.com/company/we-are-green/) through purchasing carbon credits and sourcing some of its energy from renewable sources. I use them for domain registration.

Github hasn't made a statement either, but parent company Microsoft's Azure Cloud runs on [60% renewable energy](https://www.wired.com/story/amazon-google-microsoft-green-clouds-and-hyperscale-data-centers/) and is committed to [100% renewables by 2025](https://azure.microsoft.com/en-us/global-infrastructure/sustainability/?cdn=disable#overview).

### But you can still use Netlify

If you want to use this template on Netlify, just remove `.htaccess` and delete it from `_config.yml`

### More great nerdy changes

-   New Obsidian Embed plugin also handles standard MD Images and adds path to Jekyll assets folder, including `title` and `alt`.  New plugin is called `obsidian_images_generator.rb`
-   Brackets inside code blocks are now `[[ignored]]` by the bidirectional link generator! Check my updates to `bidirectional_links_generator.rb` regex
-   Automatic Title Generation from `title:` variable! Renders as `<h1>` heading at the top of the page, so you don't need to type it manually for `_pages` anymore.
-   Permalink `/:slug` by default for all notes and pages, so you don't need to specify `permalink:` anymore! By default, all pages will be built in the root directory.
-   Responsive code blocks! Enabled horizontal scroll for codeblocks on narrow browsers.
-   Updated metadata in `head.html` with way more conditional logic based on site configuration, stripped extra whitespace from descriptions, and made sure absolute URLs for OpenGraph are rendering properly
-   Notes graph uses primary theme color variable from `style.css`
-   Privacy focused. No external calls to scripts, instead they're all saved in `assets/js`

See more about theme updates at <a href="https://garden.megu.space/style-theme.html" class="internal-link">Style & Theme</a>.

### PHP/Python Server Support

Powered by: Github --> [DeployHQ](https://www.deployhq.com/r/nx7qct) --> Dreamhost

You can use this with any cheap Shared Hosting plan, since they mostly use LAMP servers (Linux, Apache, MySQL, PHP/Python/Perl).

DeployHQ (free for 1 project) builds and serves this Jekyll site to the server via `ssh` or `ftp`. You can replace the server with whatever LAMP setup you want. I've configured `.htaccess` so that this template will work without the need for any extra configuration.

Here are the nerdy details:

-   Created `.htaccess` file for custom 404 page routing
-   Enabled `.html` extension by default and added throughout site with conditional statements
    		\- If you want to disable this, you can do so in `_config.yml`, but you should also set your `.htaccess` to allow your server to recognize pages without the extension. I've set up a `link rel="canonical"` to show once you disable this feature
-   Timezones in `_config.yml` so the remote build process adds the right timestamp for the Last Modified plugin

## Why not Wordpress?

You might be wondering why I don't just use PHP based software on a PHP server. Well, Wordpress is a database system, so each post gets saved to a MySQL database and requires more computing power than a flat file system like Jekyll.

Wordpress also hinders my ability to write—not only because the editor is slow, but also the emotion I get when I open up a draft. Something about the process actually dampens my motivation to write down an idea.

I'm teaching myself Jekyll, Ruby, and Liquid to modify this digital garden template because I believe it's the best organization system for the way my mind works. And it makes me excited to open Obsidian and write things!

Read more about digital gardening on [Maggie Appleton's repo](https://github.com/MaggieAppleton/digital-gardeners).

# Template Quirks

Interesting errors I've encountered:

-   Your file path must not have any spaces in it or your `bundle` command will fail!
-   Plugins are not compatible with Github Pages instance of Jekyll, so you have to build your site locally and reconfigure output to `docs` folder. I have a similar setup in [this github pages repository](https://github.com/meewgumi/digital-garden-ghpages-template)
-   This template only works for apex and subdomains. If you build your site in a `/directory`, you may have to reconfigure the relative links throughout the template.
-   ~~Bidirectional link generator converts double bracket links inside codeblocks too~~ **Fixed!**
-   Does not yet support Obsidian Heading Links in this format `[[page#Heading]]`, although each heading automatically generates an `id=` so you can create anchor links manually with HTML
-   Emoji is not unicode, so they might not display properly in all browsers and operating systems
-   Footnotes automatically open in new tab, even if they're internal links
-   D3.js graph zooms when you scroll, so I disabled the graph by default
-   Excerpts on archive page truncate weirdly. I wish there was a way to exclude headings. There probably is if I get deeper into Nokogiri documentation.

# License

[Original Jekyll template](https://github.com/maximevaillancourt/digital-garden-jekyll-template) by Maxime Vaillancourt is available under the [MIT license](LICENSE.md). [Buy Maxime a coffee](https://ko-fi.com/maximevaillancourt)! ☕️

This "Green" version by Megumi Tanaka is [publicly available on Github](https://github.com/meewgumi/green-web-template) and you are free to edit as you wish! [Buy Megumi a tea](https://www.buymeacoffee.com/megumi)! 🍵




## What is this?

A digital garden using a custom version of `simply-jekyll`, notenote.link's template, meewgumi's greenweb template, and optimised for integration with [Obsidian](https://obsidian.md). It is more oriented on note-taking and aims to help myself build a nice knowledge base (or ramdom things) that can scale with time. Another inspiration that I applied from is Johngrib's wiki (https://github.com/johngrib/johngrib-jekyll-skeleton) 

**Demo is here: [kimbariri.github.io](https://kimbariri.github.io)**

For the reference that I got from notenote.link' template, look at [arboretum.link](https://www.arboretum.link/). Build time is approx. 15 seconds, FYI.


![screenshot](/assets/img/screenshot.png)

## What is different?

- Markdown is fully-compatible with Obsidian (including Latex delimiters!)
- There are now only notes (no blog posts).
- There are cosmetic changes (ADHD-friendly code highlighting, larger font, larger page)
- Code is now correctly indented
- Wikilinks, but also alt-text wikilinks (with transclusion!) are usable.

## How do I use this?

Another inspiration from Meewgumi's template is here (https://megu.space/) For further explanation, refer to Meewgumi's guide here (https://garden.megu.space/)

Follow the [How to setup this site](https://notenote.link/notes/how-to-setup-this-site) guide, written by [raghuveerdotnet](https://github.com/raghuveerdotnet) and then adapted for this fork.

If you want to use it with Github Pages, it is possible, [please read this](https://github.com/Maxence-L/notenote.link/issues/5#issuecomment-762508069).

## How can I participate?

Open an issue to share feedback or propose features. Star the repo if you like it! 🌟

## How do I customize this for my needs?

Things to modify to make it yours:

- Meta content in [\_layouts/post.html](_layouts/post.html):
    ```html
    <meta content="My linked notebook" property="og:site_name"/>
    ```
- The favicon and profile are here: [assets/img/](assets/img/)
    ```
- You may want to change the copyright in [\_includes/footer.html](_includes/footer.html):
   ```html
   <p id="copyright-notice">Licence MIT</p>
   ```

## How do I remove the "seasons" feature for the notes?

Delete what's inside [\_includes/feed.html](_includes/feed.html) and replace it with:

```liquid
{%- if page.permalink == "/" -%}
    {%- for item in site.notes -%}
        <div class="feed-title-excerpt-block disable-select" data-url="{{site.url}}{{item.url}}">
            <a href="{{ item.url }}" style="text-decoration: none; color: #555555;">
            {%- if item.status == "Ongoing" or item.status == "ongoing" -%}
                <ul style="padding-left: 20px; margin-top: 20px;" class="tags">
                    <li style="padding: 0 5px; border-radius: 10px;" class="tag"><b>Status: </b>{{item.status | capitalize }}</li>
                </ul>
                <p style="margin-top: 0px;" class="feed-title">{{ item.title }}</p>
            {%- else -%}
                <p class="feed-title">{{ item.title }}</p>
            {%- endif -%}
                <p class="feed-excerpt">{{ item.content | strip_html | strip | escape | truncate: 200}}</p>
            </a>
        </div>
    {%- endfor -%}
{%- endif -%}
````

On command-line, you can run `bundle exec jekyll serve` then go to `localhost:4000` to check the result.
