---
layout: page
title: My Occasional Journal
favicon: 
permalink: /journal
---

<div>
  {% for post in site.posts limit: post_limit %}
  {% if post.public == true %}
  <div class="list-entry">
    <div><a class="internal-link" href="{{ post.url }}">{{ post.title }}</a> <span class="faded">({{ post.date | date: "%Y-%m-%d" }})</span></div>
    <div>{{ post.excerpt }}</div> 
  </div>
  {% endif %}
  {% endfor %}
  <br>
  That's it: you reached the end of this list. :)
</div>