---
layout: base.njk
---

# Tinkeren Procesboek

Damian Romeijn


## Opdrachten

{% for post in collections.all %}

<article>
 <h2><a href="/posts/{{ post.data.slug }}/">{{ post.data.title }}</a></h2>

{% if post.data.image %}
<img src="{{ post.data.image }}" width="400"/>
{% endif %}

</article>
{% endfor %}
