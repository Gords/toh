---
layout: base.njk
locale: en
translationKey: contact
---

## {{ i18n[locale].contact.title }}

{{ i18n[locale].contact.description }}

<form class="contact-form">
  <div class="form-group">
    <label>{{ i18n[locale].contact.form.name }}</label>
    <input type="text" name="name" required>
  </div>
  
  <div class="form-group">
    <label>{{ i18n[locale].contact.form.email }}</label>
    <input type="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label>{{ i18n[locale].contact.form.message }}</label>
    <textarea name="message" required></textarea>
  </div>
  
  <button type="submit">{{ i18n[locale].contact.form.submit }}</button>
</form>

