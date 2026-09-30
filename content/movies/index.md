---
layout: base.njk
title: movies
pageClass: index-page
templateEngineOverride: njk,md
breadcrumbs:
  - label: home
    url: /
  - label: movies
---

# movies

{% for movie in collections.movie %}
- [{{ movie.data.title }}]({{ movie.url }})
{% endfor %}