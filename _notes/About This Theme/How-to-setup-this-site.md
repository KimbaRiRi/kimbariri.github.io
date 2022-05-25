---
title: How to setup this site
tags: Theme
season : summer
---

This is going to be a super simple post about how to setup and use this theme for your own website.

### Setup Prerequisites

For this tutorial, we’ll need to install a few things on your machine (you may have some of these already). Following the instructions on each website to install them.

- [[Ruby::https://www.ruby-lang.org/]]
- [[RubyGems::https://rubygems.org/]]
- [[Git::https://git-scm.com/downloads]]

You’ll also need to create accounts on the following services:

- [[GitHub::https://www.github.com/join]] (to store the website)
- [[Netlify::https://app.netlify.com/signup]] (to serve the website so others can see)

Once you are all set with the prerequisites, we can then get to the fun part of getting it to appear on your screen. Let's get started with that.

### 1. Create a fork of the template repository

To simplify things, I provide the template showed in the image above to get started. You can always tweak this template to your taste later.

Visit the GitHub page for my template repository [[Maxence-L/notenote.link::https://github.com/Maxence-L/notenote.link]], and fork it to your account using the Fork button:

> <img src="/assets/img/fork_button.jpg" style="box-shadow: 2px 2px 20px 0 #ddd;"/>

Once the forking process is complete, you should have a fork (essentially a copy) of my template in your own GitHub account. On the GitHub page for your repository, click on the green “Clone or download” button, and copy the URL: we’ll need it for the next step.

### 2. Clone your repository locally 

Next, we want to download the files from your GitHub repository onto your local machine. To do this, replace <YOUR_COPIED_URL_HERE> in the command below with the URL you copied in the previous step, then execute this command:

```
$ git clone <YOUR_COPIED_URL_HERE> my-personal-website
```

As a reference point, this is how it looks like for me (the difference is likely just the GitHub username):

```
$ git clone git@github.com/Maxence-L/notenote.link my-personal-website
```

Then, navigate into the directory that was just created:

```
$ cd my-personal-website
```

### 3. Test out the site locally

Sweet! You now have your repository’s source code on your machine. Within the my-personal-website directory, run the following command to install the necessary dependencies like Jekyll:

```
$ bundle
```

Once that’s done, ask Jekyll to start serving the site locally:

```
$ bundle exec jekyll serve
```

Then, open up [[http://localhost:4000::http://localhost:4000]] in your browser.

If everything’s done correctly, you should now see the home page of your Personal Jekyll Website with notenote.link Theme. 🎉

Keep in mind that this site is only available locally (notice the `localhost` part of the URL), so if we want it to be available on the Internet for everyone to enjoy, we need to deploy it to the Internet: we’ll use Netlify for that in the next step.

### 4. Connect your GitHub repository to Netlify

Netlify lets you automatically deploy your personal website on to the Internet when you update your GitHub repository. To do this, we need to connect your GitHub repository to Netlify:

1. Log in to Netlify
2. Once logged in, click the “New site from Git” button
3. On the next page, select GitHub as the continuous deployment provider (you may need to authorize the connection, in which case, approve it)
4. On the next page, select your website repository from the list.
5. On the next page, replace the basic build settings with the following.
    1. Type in "jekyll build" (without the quotes) inside the text field titled "Build Command".
    2. Similarly type in "_site/" (without the quotes) inside the text field titled "Publish Directory".
6. On the next page, keep the default settings, and click on “Deploy site”.

That was easy! We’re almost done.

Wait a couple of minutes for the initial deploy to complete.

Once that’s done, your website should be available on the Internet via a generic Netlify URL, which you can change to a custom domain later if you’d like.

Now the cool thing is this: whenever you push an update to your GitHub repository, Netlify will automatically deploy your updates to the Internet.

### 5. Start producing content :

At this point, you can start updating the files on your machine (in the my-personal-website folder) to change your jekyll seamless based website to your liking: update the copy, add some notes, tweak the layout, customize the colors, etc. Once you have something you’re happy with, push your changes to your GitHub repository with the following commands:

```
$ git add --all
$ git commit -m 'Update content'
$ git push origin master
```

If that command succeeds and the rest of the tutorial was done correctly, in a couple of minutes, you should see your changes live on your Netlify website. 🚀

And we’re done! You now have your own notenote.link based Personal Website .

-- About This Site -- 

### Link syntax

To link to another note, you can use multiple syntaxes. The following four use the "double-bracket" notation ([view the Markdown source file](https://github.com/maximevaillancourt/digital-garden-jekyll-template/blob/master/_notes/your-first-note.md#link-syntax) to see the underlying syntax).

- Using the note `title` variable: [[a note about cats]]
- Using the note's filename: [[cats]]
- Using the note's title, with a label: [[cats|link to the note about cats using the note title]]
- Using the note's filename, with a label: [[cats|link to the note about cats using the note's filename]]

In all cases, if the double-bracket link does not point to a valid note, the double brackets will still be shown, like this: [[there is no note that matches this link]].

Alternatively, you can use regular [Markdown syntax](https://www.markdownguide.org/getting-started/) for links.

Since the Web is all about HTML, you can always use plain HTML if you want, like this: <a class="internal-link" href="/cats.html">This is a link to the note about cats with HTML</a>. Don't forget to use the `.internal-link` class to make sure the link is styled as an internal link (without the little arrow).

Of course, you can also link to external websites, like this: [this is a link to Wikipedia](https://wikipedia.org/). Again, you can use plain HTML if you prefer. Footnotes are also supported and will be treated like internal links.[^1]

[^1]: This is a footnote. For more information about using footnotes, check out the [Markdown Guide](https://www.markdownguide.org/extended-syntax/#footnotes).

### Site configuration

Some behavior is configurable by tweaking the `_config.yml` file.

**`favicon`**: Insert an emoji and this will be generated as your site's favicon automatically! This is only supported by browsers that recognize svg favicons, which is the majority of modern browsers.

**`use_html_extension`**: if you use a static host that doesn't support URLs that don't end with `.html` (such as Neocities or Dreamhost), leave this as `true` in the `_config.yml` file. If you configure your `.htaccess` to remove extensions, remember to add `link` metadata for canonical URLs.

**`open_external_links_in_new_tab`**: when set to `true`, this makes external links open in new tabs. Set to `false` to open all links in the current tab.

**`url`**: Set to your full web URL including `https://`

**`timezone`**: Set to your desired posting timezone so that the Last Modified At plugin displays the right date when you edit files.

### Pages
Save static pages in the root directory in `.md` format. Each page needs to have the following at the top:

```
---
layout: page
title: About
---
```

### Automatic bi-directional links

Notice in the "Notes mentioning this note" section that there is another note linking to this note. This is a bi-directional link, and those are automatically created when you create links to other notes.

### Link previews

If you're on a device with mouse support, try hovering your mouse on internal links to preview the notes: [[a note about cats]].

### Images and other Markdown goodies

Finally, because you have the full power of Markdown in this template, you can use regular Markdown syntax for various formatting options.

Lists work as expected:

- List element A
- List element B
- List element C

1. List element
2. List element
3. List element

If you'd like to quote other people, consider using quote blocks:

> Lorem ipsum dolor sit amet

And of course, images look great:

![assets/images/image.jpg](assets/images/image.jpg)

### Code syntax highlighting

You can add code blocks with full syntax color highlighting by wrapping code snippet in triple backticks and specifying the type of the code (`js`, `rb`, `sh`, etc.):

```js
// Here's a bit of JavaScript:
console.log('hello!')
```

```rb
# And now some Ruby
def foo(bar)
  "baz"
end
```

```sh
$ cat /dev/urandom | grep "the answer to life" # shell scripts look nice too
```

### Archive
The [[archive]] page displays all notes in reverse chronological order. Design is inspired by https://maximevaillancourt.com/blog.

Archive page includes:
- Note title with link to note
- Note category
- Month and Year modified
- Excerpt

# Installation
1. Create new respository from the [Github Template](https://github.com/meewgumi/digital-garden-apache-template) by clicking "Use this template"
2. Customize `_config.yml`
3. Sign up for [DeployHQ](https://www.deployhq.com/r/nx7qct)
4. Connect Github repository to DeployHQ
5. Add your server's FTP or SSH information
6. Configure [Jekyll Build Commands](https://www.deployhq.com/guides/jekyll) on DeployHQ and turn `vendor` caching on
7. Deploy!

Optional: [[Obsidian Setup]]


# License
This digital garden template is free and open-source. It runs on Apache/PHP servers and the [Github code is available here](https://github.com/meewgumi/digital-garden-apache-template). This version of the code was modified by [Megumi Tanaka](https://megumi.co) in 2021.

Based on this [digital garden template](https://github.com/maximevaillancourt/digital-garden-jekyll-template), running on [Netlify](https://maximevaillancourt.com/blog/setting-up-your-own-digital-garden-with-jekyll), created by [Maxime Vaillancourt](https://github.com/maximevaillancourt).  [Buy the original creator a coffee](https://ko-fi.com/maximevaillancourt)! ☕️

Go forth, have fun, and learn new something every day! ✌️

# Footnotes