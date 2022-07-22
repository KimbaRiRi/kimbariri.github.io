---
layout: page
title: Archive
favicon:
permalink: /archive
---

<div class="grid">
	<div class="col">
		<h2>Notes</h2>
<ul class="archive">
{% for note in site.notes %}
{% if note.public == true %}
<li>
	<a href="{{ note.url }}{%- if site.use_html_extension -%}.html{%- endif -%}" class="internal-link">{{note.title}}</a>
	<!-- {% if note.category != null %} in {{note.category}} -->
		<span>({{ note.last_modified_at | date: "%B %Y" }})</span>
		<p>{{ note.excerpt | strip_html | truncate: 60, "..." }}</p> 
	<!-- {% endif %} -->
</li>
{% endif %}
{% endfor %}
</ul>
    </div>
		<div class="col">
		<h2>Posts</h2>
<ul class="archive">
{% for post in site.posts %}
{% if post.public == true %}
<li>
	<a href="{{ post.url }}{%- if site.use_html_extension -%}.html{%- endif -%}" class="internal-link">{{post.title}}</a>
		<span>({{ post.last_modified_at | date: "%B %Y" }})</span>
		<p>{{ post.excerpt | strip_html | truncate: 60, "..." }}</p>
</li>
{% endif %}
{% endfor %}
</ul>
    </div>
</div>
