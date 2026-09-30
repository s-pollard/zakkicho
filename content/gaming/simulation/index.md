---
layout: base.njk
title: simulation
pageClass: index-page
templateEngineOverride: njk,md
breadcrumbs:
  - label: home
    url: /
  - label: gaming
    url: /gaming/
  - label: simulation
---

# simulation

{% for game in collections["simulation"] | sortByTitle %}
- [{{ game.data.title }}]({{ game.url }})
{% endfor %}