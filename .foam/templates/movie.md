---
foam_template:
  name: movie
  description: new movie note
  filepath: 'content/movies/$FOAM_SLUG.md'
layout: base.njk
title: "$FOAM_TITLE"
tags:
  - movie
breadcrumbs:
  - label: home
    url: /
  - label: movies
    url: /movies/
  - label: "$FOAM_TITLE"
---

<pre class="raw-note">$FOAM_TITLE

release year:
director:
runtime:
watched:
rating:

notes
</pre>

<div class="meta note-footer">
created: $FOAM_DATE_YEAR.$FOAM_DATE_MONTH.$FOAM_DATE_DATE
</div>