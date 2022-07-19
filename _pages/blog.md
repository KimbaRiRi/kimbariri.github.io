---
layout: page
title: My Occasional Journal
favicon: 
permalink: /journal
---
<div class="intro grid">
	<div class="col">
		<div class="figure">
		<img src= "/assets/images/mydrawings/Edward.jpg"/>
		</div>
	</div>
	<div class="col">
		<div class="meta">
			<div class="title">
				<div class="title">
					<h2>Daily, Weekly, or forgot to written frequent journals</h2>
				</div>
			</div>
			<div class="summary">
				<em><b>**I am still recovering my note and images relating to this page content.</b></em>
			</div>
		</div>
	</div>
</div>

<div>
  <h1 class="post-title">All blog posts</h1>
  {% for post in site.posts limit: post_limit %}
  <div class="list-entry">
    <div><a class="internal-link" href="{{ post.url }}">{{ post.title }}</a> <span class="faded">({{ post.date | date: "%Y-%m-%d" }})</span></div>
    <div>{{ post.excerpt }}</div>
  </div>
  {% endfor %}
  <br>
  That's it: you reached the end of this list. :)
</div>