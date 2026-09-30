---
layout: base.njk
title: rpg
templateEngineOverride: njk,md
breadcrumbs:
  - label: home
    url: /
  - label: gaming
    url: /gaming/
  - label: rpg
---

# rpg

{% for game in collections["rpg"] | sortByTitle %}
- [{{ game.data.title }}]({{ game.url }})
{% endfor %}