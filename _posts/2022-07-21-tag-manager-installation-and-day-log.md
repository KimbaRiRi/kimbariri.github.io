---
layout: post
title: "Marketing Suite installation, Ableton Live, and Markdown"
favicon:
redirect_from: 
excerpt: My plan is implementing Marketing Tech injector inside of my Jekyll based website. 
---

#### Ableton Beginner Chapter 

[Ableton Tutorial Document](<http://intro.online.berklee.edu/?mkt_tok=NDk3LUdFSC00MzAAAAGCgjw0QA6eqLMklSAi5TCIZ8OOSEPT6qnzSPJNSdcZCdWk0oYGTSYkMPenaemX8RvgOLd6tY5HI-ivWqwmIa2vJAvcul08nTlGi60ZzoB6g6Z9JhY#/247/Online+Courses+REVMPRD-278.01/247/1/sessions-and-arrangements>)

#### Google Tag Manager

Tutorial Link: [Google Official Guide](<https://developers.google.com/tag-platform/tag-manager/web>)

Dashboard [Google Tag Manager Admin](<https://tagmanager.google.com/#/admin/>)

Data Layer guide: [Google Data Layer](<https://developers.google.com/tag-platform/tag-manager/web/datalayer>)


Go to the Google Tag Manager. GTM is equivalent to Adobe Target. 


![[Screen Shot 2022-07-21 at 2.27.24 pm.png]]

Paste your Google Tag Manager snippets into your partial html file. (inside of '\_includes')

![[Screen Shot 2022-07-21 at 2.44.40 pm.png]]


#### Google Optimize 

This is the dashboard of Google Optimize. It's similar to Adobe Target. 


![[Screen Shot 2022-07-21 at 2.42.17 pm.png]]


##### Google Analytics 

In order to install the GA into the Jekyll, you may face some configuration issues. In that case refer to this tutorial https://desiredpersona.com/google-analytics-jekyll/ and https://morotsman.github.io/blog,/google/analytics,/jekyll,/github/pages/2020/07/07/add-google-analytics.html 
https://michaelsoolee.com/google-analytics-jekyll/

Of course, The google Analytics must link to the Google Optimize.


![[Screen Shot 2022-07-21 at 3.06.07 pm.png]]


For extra step, I also installed the '' of MicroSoft. 


#### Some Extra helpful links about Analytics


https://www.pedromonjo.com/

https://www.stevefenton.co.uk/category/analytics/


#### To do list

- I found an error about categories of notes. Noooooo


![[Screen Shot 2022-07-21 at 4.24.00 pm.png]]


#### Adobe Extension Installation is not easy...because 

Their documentation deck is huge, thus not so well organised AT ALL!

To find an answer you seek on every single step, you will fell into the rabbit holes so easily. 
Another thing that annoyed me was, the documentation is not so up-to-date while Adobe constantly changes their UI structures inside of AEP dashboards. 


![[Screen Shot 2022-07-21 at 4.22.10 pm.png]]


Another tricky step was finding the extension menu. Adobe document did not mention how to find extension. Aren't you supposed to explain that I have to make a tag property first before finding extension tab? Gees...


![[Screen Shot 2022-07-21 at 4.55.27 pm.png]]

After hopping through a couple of confusions, I finally managed to find the production and development library.


![[Screen Shot 2022-07-21 at 4.55.02 pm.png]]


And finally installed required extensions. From my organisation's sandbox, I was not allowed to adopt the webSDK. Well, I at least was able to install experience client ID service so this should be enough. 

Adobe is powerful indeed but I already fill the setting progress is a bit overkill now. 


![[Screen Shot 2022-07-21 at 4.52.12 pm.png]]

It was quite hustle to find correct document references within adobe experience league. I wish they could have arrayed the contents better. 

Anyway, for the web base implementation - refer to this link. 

https://experienceleague.adobe.com/docs/platform-learn/implement-in-websites/overview.html?lang=en

And this is specifically for Analytics report suite. 

https://experienceleague.adobe.com/docs/analytics/admin/manage-report-suites/new-report-suite/t-create-a-report-suite.html?lang=en



#### Useful link telling details about Markdown  

This link was quite useful. Nice to have. 

https://blog.bianxi.com/2021/09/25/how-to-use-markdown-for-writing-technical-documentation/
