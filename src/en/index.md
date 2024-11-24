---
layout: base.njk
locale: en
translationKey: home
---

# {{ i18n[locale].home.title }}

{{ i18n[locale].home.welcome }}

## {{ i18n[locale].home.featured.title }}

{{ i18n[locale].home.featured.description }}

<div class="featured-items">
  {% for item in i18n[locale].home.featured.items %}
    <div class="featured-item">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <a href="{{ item.link }}">{{ i18n[locale].home.readMore }}</a>
    </div>
  {% endfor %}
</div>