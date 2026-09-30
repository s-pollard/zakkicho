---
layout: base.njk
title: strategy
pageClass: index-page
pageClass: index-page
templateEngineOverride: njk,md
breadcrumbs:
  - label: home
    url: /
  - label: gaming
    url: /gaming/
  - label: strategy
---

# strategy

{% for game in collections["strategy"] | sortByTitle %}
- [{{ game.data.title }}]({{ game.url }})
{% endfor %}