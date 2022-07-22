---
layout: post
title: "Website and MarTech Memo Logs on 22.07.22"
public: false
favicon:
redirect_from: 
excerpt: "Website logs and Today's findings on 22.07.22"
---

## Website logs and Today's findings


### Obsidian Template Links

I found crazy-awesome obsidian template references: 
- https://thebuccaneersbounty.wordpress.com/2022/01/05/how-i-use-the-daily-notes-plugin-a-comprehensive-guide/
- https://agileadam.com/2022/07/obsidian-daily-note-implementation-v2/


### Public Site Error Founding

#### 404 error while no issue on localhost

I didn't know this till now. Oh my god. What a disaster. Haven't I checked this? Of course, I did.
The cause was from github.io's quirk. 


Urrrrrrrr!!! 😩



![[/notes/Screen Shot 2022-07-22 at 11.00.54 am.png]]

<br/>

![[/notes/Screen Shot 2022-07-22 at 11.00.41 am.png]]

If you see that, It's not a problem on localhost at all. 

![[/notes/Screen Shot 2022-07-22 at 11.30.39 am.png]]

And I found some script that is lowering the capital case of URLs into the lowercase-Jekyll template URL. Let's try that. 

Nope. 404 errors due to XSS policies on the browser. 

Bugger!


![[/notes/Screen Shot 2022-07-22 at 11.47.53 am.png]]

<br/>

![[/notes/Screen Shot 2022-07-22 at 11.51.16 am.png]]
<br/>

In the end, I solved this issue by changing it from ': title' to ': slug.'


##### References: 

https://mademistakes.com/mastering-jekyll/how-to-link/
https://gist.github.com/sbliven/0ca4dee4e0190a6b3dc7e3d8040cc395?permalink_comment_id=3526205


#### Image link does not correctly work on posts


This issue is also, again, due to the file path. It may require me to write some Ruby Plugin...but it's too much hustle to think about. 

This is what it looks like when I attach the images to the posts. 

<!-- ![[Screen Shot 2022-07-22 at 11.52.15 am.png]] -->
![[/notes/Screen Shot 2022-07-22 at 11.52.15 am.png]]

When they are HTML-fied, Those image links get broken. 


![[/notes/Screen Shot 2022-07-22 at 11.52.04 am.png]]


I manually changed the location via visual studio code for a quick solution. 

This issue only happens within the journal post. The note is absolutely fine. 

![[/notes/Screen Shot 2022-07-22 at 11.57.49 am.png]]

The trick is just simply changing the file path. 

![[/notes/Screen Shot 2022-07-22 at 12.08.17 pm.png]]

This only applies to posts for now. 

#### Archive List Problems 


_Oops, I forgot to capture the screenshot of the issues about this._

Briefly speaking, the archive page did not show any posts and notes. I tried to figure out why. The Archive page was working fine before, and I didn't amend that function much. Was it permalink? Was it the wrong path? I was spending almost 2 hrs figuring out this. 


Now it's solved. Hugh. 


![[/notes/Screen Shot 2022-07-22 at 10.32.37 am.png]]


However, it shows all notes, including notes I don't want to publish. 

So I added the 'Public' option inside the frontmatter and changed the liquid loop slightly. 


![[/notes/Screen Shot 2022-07-22 at 10.46.34 am.png]]

<br/>

![[/notes/Screen Shot 2022-07-22 at 10.46.41 am.png]]

Now it's showing correct results. 

For all issues, Did I write the wrong liquid syntax? Did I forget to close the brackets? None of them happened. The shitty part of the liquid syntax is, It's very sensitive to any line braces or white space within the template. That means I have to give up some of the 'beautify' options within the template. 😩

#### How Do I Write the Posts

I write most of my notes via Obsidian. Most of the codes are, of course, written through visual studio code. However, I need grammar, typo, and wording checkup support as I skim texts a lot. (Typical for ADHDers)


That is why for the posting, I use Obsidian. 

![[/notes/Screen Shot 2022-07-22 at 11.02.50 am.png]]
