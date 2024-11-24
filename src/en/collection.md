---
layout: base.njk
locale: en
translationKey: collection
---

## {{ i18n[locale].collection.title }}

{{ i18n[locale].collection.description }}

### {{ i18n[locale].collection.gallery.title }}

{{ i18n[locale].collection.gallery.description }}

<div class="gallery">
  {% for item in i18n[locale].collection.items %}
    <div class="gallery-item">
      <img src="{{ item.image }}" alt="{{ item.title }}">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </div>
  {% endfor %}
</div>

<!-- Modal Structure -->
<div id="modal" class="modal">
    <span class="close">&times;</span>
    <img class="modal-content" id="modal-image">
    <div id="caption"></div>
    <a class="prev">&#10094;</a>
    <a class="next">&#10095;</a>
</div>