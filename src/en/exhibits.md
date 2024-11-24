---
layout: base.njk
locale: en
translationKey: exhibits
---

## {{ i18n[locale].exhibits.title }}

{{ i18n[locale].exhibits.description }}

{% for exhibit in i18n[locale].exhibits.list %}
### {{ exhibit.title }}

{{ exhibit.description }}

**{{ i18n[locale].exhibits.dates }}**: {{ exhibit.dates }}
**{{ i18n[locale].exhibits.location }}**: {{ exhibit.location }}
{% endfor %}

