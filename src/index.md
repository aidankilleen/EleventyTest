---
layout: base
title: Home
tags: [main]
---

# Sample Sites

{% for post in collections.posts %}

- [{{ post.data.title }}]({{ post.url | url }})

{% endfor %}
