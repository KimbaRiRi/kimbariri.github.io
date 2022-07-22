---
title: About this page
layout: page
category: Web Development
tags: CMS
permalink: /about-this-page
language: English
favicon: 
---

## Welcome!
This is my first note on this website. This website is based on <a href="https://help.obsidian.md/How+to/Internal+link" target="_blank">Obsidian</a> and Site Generator - Jekyll</a>. 

In terms of the conceptual structure, This spouting experience is heavily inspired by <a href="https://github.com/MaggieAppleton/digital-gardeners" class="external-link" target="_blank">Maggie's Digital Gardening Project</a>, 기계인간 Machinery Human's <a href="https://johngrib.github.io/wiki/my-wiki/" class="external-link" target="_blank">My Wiki with Vim</a>, and Megumi's <a class="external-link"
		href="https://garden.megu.space/" target="_blank">Digital Garden Green Template </a>. 

This website is currently being hosted on Github. The reason is that: 

1. I am a lazy arse who even don't want to bother to check extra deployment push to another service. That is why. 
2. As I am actively pushing my updates to my own Github, it just makes sense to deploy directly to Github. 
3. I couldn't find any valid reason to deploy through **Netflify** or **Vercel**. I may consider it in future- I don't know. This whole **Obsidian** syncing to **Jekyll** thing is very experimental to me. 

Initially, I was publishing my personal website with the Gatsby integrating with WordPress on headless CMS way. However, there were too many hustles to figure out how to incorporate the Gatsby way with WP API. If my work requires this, I will do it (well, because I am paid for it). For the personal website? That's too much—the consistent updates and checking the dependencies on node & npm versions are also exhausting me. 

## Why?
Primarily for my reference, I'm learning Jekyll as I edit this template. I'm doing this as a
replacement for my previous portfolio <a href="https://spacecat.surge.sh" target="_blank">Digital Space Cat</a>which was based on Gatsby and other microblogs from Tumblr and mediums. Markdown and Obsidian help me gather knowledge and thoughts, plus write better content, faster.


## The Journey has been so far...

##### 25 May 2022

It was painstaking to fix the GitHub deployment issue. Alongside the gem dependency installation conflicts with other dependencies, I couldn't figure out why. 

##### The solution was: 

- Deleting all Jekyll Caches
- Check the passage of your gem env with "gem env" "which ruby" "which gem"
- nano  ~/.bash_profile check where your home path is located. 
- Bundle clean --force
- If it looks a bit messy: rm -rf ~/.gem
- Bundle Update
- Gem Update
- Removing Gemfile.lock
- Re-do Bundle Install --verbose
- JEKYLL_ENV=production bundle exec jekyll serve --trace
- Not sure if this helped, but .github-pages.yml setup might do something as well. (Refer to my branch)

![[/notes/the initial workflow.jpeg]]


##### 14 July 2022

The log is described here. 

[Update Log on 22.07.14](/posts/Update-Logs-of-day.22.07.14)


##### 19 July 2022

The log is described here. 

[Update Log on 22.07.19](</posts/Update-Logs-of-day.22.07.19>)


##### 20 July 2022

The log is described here. 

[Update-Logs-of-day on 22.07.20](</posts/Update-Logs-of-day.22.07.20>)


##### 21 July 2022

The log is described here. 

[Update-Logs-of-day on 22.07.21](</posts/tag-manager-installation-and-day-log>)



#### References 

- https://github.github.com/gfm/
- https://jekyllrb.com/docs/permalinks/
- https://garden.megu.space/your-first-note.html
- https://johngrib.github.io/wiki/my-wiki/
- https://notenote.link/notes/how-to-use-the-special-features
- https://github.com/brennanbrown/enjoyment-work 


## Next Milestone is...
- [x] Start migrating CSS to scss format.
- [x] Add 2nd post placeholders.
- [x] Start migrating all js within HTML pages and markdowns within organised folder structures.
- [x] Configure the Obsidian redirect link based on the folder structure
- [x] Adding Search Option
- [x] Figuring out the Wiki stacks within this website
- [x] Construct a page that shows sorted notes based on the tag word
- [WIP] Brushing up the Gallery and Showcase pages
- [x] Brushing up styles on the Digital Garden page along with the search bar
- [WIP] Implementing Adobe Target and Analytics
- [WIP] Implementing Google Analytics, AdSense
- [x] Figure out how image link insertion from Obsidian won't break the localhost links
- [x] Make a blog page that shows the post journal sorted by written date.
- [TBD] Integrating Insta Feed to website
- [] Set the Googld Ads on note and post page (Let me have a bread on my table)
- [] Brushing up graph node between notes. It's currently not-browser width responsive. 
- [] The live preview tooltip is not working. Find some solutions
- [] Fixing the permalink on digital garden
- [] Adding pagination and backlink


** Do not bloody be nip-picky about the broken grammar and words. No grammar nagging, please. 