---
layout: base.njk
title: roguelike
templateEngineOverride: njk,md
breadcrumbs:
  - label: home
    url: /
  - label: gaming
    url: /gaming/
  - label: roguelike
---

# roguelike

{% for game in collections["roguelike"] | sortByTitle %}
- [{{ game.data.title }}]({{ game.url }})
{% endfor %}