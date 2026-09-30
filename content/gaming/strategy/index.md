---
layout: base.njk
title: strategy
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