---
foam_template:
  name: music
  description: new music note
  filepath: 'content/music/$FOAM_SLUG.md'
layout: base.njk
title: "$FOAM_TITLE"
tags:
  - music
breadcrumbs:
  - label: home
    url: /
  - label: music
    url: /music/
  - label: "$FOAM_TITLE"
---

# $FOAM_TITLE

<!-- replace the three lines below with artist, album, and year -->
artist name  
album title  
year

rating:

tracks

thoughts

<div class="meta note-footer">
created: $FOAM_DATE_YEAR.$FOAM_DATE_MONTH.$FOAM_DATE_DATE
</div>