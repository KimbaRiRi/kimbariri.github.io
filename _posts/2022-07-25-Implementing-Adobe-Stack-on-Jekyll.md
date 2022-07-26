---
layout: post
title: "Why is that so tough to get things done with Adobe Stacks?"
public: true
favicon:
redirect_from: 
excerpt: "Adobe, all you need to do is give me just one paragraph instead of 10 pages of implementation documents."
---

## Why is Adobe Implementation Tricky?


### Adobe needs to have a better structure for any technical implementation. 


Adobe, why do you have so many documents for the same subject?

Unlike Google or other suite programs, Adobe provided multiple documents for bloody library tagging. Gees. 


No, seriously. To find out to correctly implement the target on my website, how many documents did I end up with?

- This website shows the Experience platform on a web tutorial. 

https://experienceleague.adobe.com/docs/platform-learn/implement-in-websites/configure-tags/add-embed-code.html?lang=en

- And this one shows how to implement stuff through tags.

https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/adobe/target/overview.html?lang=en#adobe-target-extension-with-an-asynchronous-deployment

- And this is the target implementation guide. 
https://experienceleague.adobe.com/docs/target/using/integrate/a4t/before-implement.html?lang=en

- And this is an implementation guide from the documentation. 

https://experienceleague.adobe.com/docs/analytics/implementation/home.html?lang=en

- And this is a deployment guide. 
https://experienceleague.adobe.com/docs/analytics/implementation/launch/deploy-dev.html?lang=en

- And this is from the developer guide. 

https://developer.adobe.com/target/implement/client-side/

- And this is a Quickstart guide from Tags documentation. 
https://experienceleague.adobe.com/docs/experience-platform/tags/get-started/quick-start.html



<u>None of them is aligned linearly. </u>


#### Are you kidding me???

#### So...Adobe, which one is the correct one? 


🙀

Once you find the correct documentation, the technicality is not tricky. 

All problems always stem from the loophole of their massive documentation dumps. 


And also, there are multiple deployments. By AT.js, Tag, and Server Side implementation. 

So Adobe, 

#### Which one do you mean I have to choooooooseeeeee?


![[posts/Screen Shot 2022-07-26 at 12.23.49 am.png]]
<br/>

Getting back to practicality, Web SDK is not supported within the organisation's sandbox. So this is out. The server-side is possibly out as well. 

This blog is based on a static site generator, so server-side implementation also does not apply. However, I couldn't find the client-side option on Target 2, so I am not sure the device-only mode is just another labelling from the client side. Again, Adobe constantly changes the naming of functionalities of stacks, so I am not sure. 

Just in case, I also downloaded at.js and other adobe analytics libraries from code manager. However, the tag script handled analytics well, except for the target v2. 

Hmmm...

😑

As you see, the client ID and app measurement kick in alright. 

![[Screen Shot 2022-07-26 at 11.37.02 am.png]]


I checked the omnibug as well. 

Google Tag Manager, MS Clarity, Google Analytics, and Adobe Analytics appeared. 
Wait, why do I have launch twice? We will worry about it later. 

![[Screen Shot 2022-07-26 at 11.38.27 am.png]]

<br />

![[Screen Shot 2022-07-26 at 11.39.07 am.png]]


![[Screen Shot 2022-07-26 at 11.38.08 am.png]]

![[Screen Shot 2022-07-26 at 11.37.58 am.png]]


<u><i>Arhhhhh!!!!! (Pulls hairs)</i></u>
<br/>

🤬

As I can see the analytics kicking in without problems, I don't know what tag I am missing to put, honestly.  <b>**Helllllp!</b>

![[Screen Shot 2022-07-26 at 11.46.48 am.png]]