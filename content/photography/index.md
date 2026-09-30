---
layout: base.njk
title: photography
pageClass: index-page
templateEngineOverride: njk,md
breadcrumbs:
  - label: home
    url: /
  - label: photography
---

# photography

{% for photo in collections.photography %}
- [{{ photo.data.title }}]({{ photo.url }})
{% endfor %}