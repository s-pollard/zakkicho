---
layout: base.njk
title: music
templateEngineOverride: njk,md
breadcrumbs:
  - label: home
    url: /
  - label: music
---

# music

{% for album in collections.music | sortByTitle %}
- [{{ album.data.title }}]({{ album.url }})
{% endfor %}