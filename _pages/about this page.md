---
title: About this page
layout: page
category: Get Started
tags: CMS, personal, digital garden
permalink: /about-this-page
---

## Welcome!
This is my first note of this website. This website is based from [Obsidian](https://help.obsidian.md/How+to/Internal+link) and Megumi's [Green Template](https://github.com/meewgumi/green-web-template). 

In terms of the conceptual structure, This spouting experience is heavily inspired by [Maggie's Digital Gardening Project](https://github.com/MaggieAppleton/digital-gardeners) and 기계인간 Machinery Human's [My Wiki with Vim](https://johngrib.github.io/wiki/my-wiki/). 

This website is currently being hosted on Github. The reason is that: 

1. I am a lazy arse who even don't want to bother to check extra deployment push to another service. That is why. 
2. As I am actively pushing my updates to my own Github, it just makes sense to deploy directly to Github. 
3. I couldn't find any valid reason to deploy through **Netflify** or **Vercel**. I may consider it in future- I don't know. This whole **Obsidian** syncing to **Jekyll** thing is very experimental to me. 

Originally, I was publishing my personal website with the Gatsby integrating with WordPress on headless CMS way. However, figuring out how incorporate the Gatsby way with WP API was too much hustles. If this was required by my work, I will do it (well because I am paid for it). For the personal website? That's too much. The consistent updates and checking the dependencies on node & npm version was exhausting me out as well. 

## The Journey has been so far...

25 May 2022

It was really painstaking to fix the github deployment issue. Alongside the gem dependency installation conflicts to other dependencies, I couldn't figure it out why. 

#### The solution was: 

- Deleting all Jekyll Caches
- Check the passage of your gem env with "gem env" "which ruby" "which gem"
- nano  ~/.bash_profile check where your home path is located. 
- Bundle clean --force
-  if it looks a bit messy: rm -rf ~/.gem
-  Bundle Update
- Gem Update
- Removing Gemfile.lock
- Re-do Bundle Install --verbose
- JEKYLL_ENV=production bundle exec jekyll serve --trace
- Not sure if this helped but .github-pages.yml setup might do something as well. (Refer to my branch)

![[the initial workflow.jpeg]]

###### References 

- https://github.github.com/gfm/
- https://jekyllrb.com/docs/permalinks/
- https://garden.megu.space/your-first-note.html
- https://johngrib.github.io/wiki/my-wiki/
- https://notenote.link/notes/how-to-use-the-special-features


## Next Milestone is...
- [x] Start migrating css to scss format
- [WIP] Add 2nd post
- [ ] Start migrating all js within html pages and markdowns within organised folder structures
- [ ] Configure the Obsidian redirect link into based on the folder structure
- [ ] Adding Search Option
- [ ] Figuring out the Wiki stacks within this website
- [ ] Add a comments plugin (Disqus)
- [ ] Install a remote theme
- [ ] Learn how to add gists to the posts
- [ ] Add reading time to posts
- [ ] Install a plugin to speed up post creation (jekyll-compose)
- [ ] Try out the static comments option
- [ ] Implementing Google Analytics, AdSense, Adobe Cloud for personal research interest. (I mean, I have a career at this field so it will happen for experimental case studies.)
- [ ] Building(or Setup if I can find the project repo) a TypeScript NPM to integrate Grammarly API with Obsidian


** Do not bloody be nip-picky about the broken grammar and words. I am in dyslexia/dyspraxia spectrum. 