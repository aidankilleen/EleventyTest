---
layout: base
title: My Sample Site
---

# Sample Sites

{% for post in collections.posts %}

- [{{ post.data.title }}]({{ post.url | url }})

{% endfor %}
