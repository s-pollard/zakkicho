---
layout: base.njk
title: action-adventure
templateEngineOverride: njk,md
breadcrumbs:
  - label: home
    url: /
  - label: gaming
    url: /gaming/
  - label: action-adventure
---

# action-adventure

{% for game in collections["action-adventure"] | sortByTitle %}
- [{{ game.data.title }}]({{ game.url }})
{% endfor %}