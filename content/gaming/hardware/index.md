---
layout: base.njk
title: hardware
templateEngineOverride: njk,md
breadcrumbs:
  - label: home
    url: /
  - label: gaming
    url: /gaming/
  - label: hardware
---

# hardware

{% for item in collections["hardware"] | sortByTitle %}
- [{{ item.data.title }}]({{ item.url }})
{% endfor %}
