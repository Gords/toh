---
layout: base.njk
title: Contact
---

<div class="content-container">

## Contacto

Puede contactarme a través de los siguientes medios:

- **Email:** [fukuoka.em@gmail.com](mailto:fukuoka.em@gmail.com)
- **Instagram:** [@emifukuokag](https://www.instagram.com/emifukuokag/)

Alternativamente, puede usar el siguiente formulario de contacto:

<form action="/submit-form" method="POST">
    <label for="name">Nombre:</label><br/>
    <input type="text" id="name" name="name" required><br/><br/>
    
    <label for="email">Email:</label><br/>
    <input type="email" id="email" name="email" required><br/><br/>
    
    <label for="message">Mensaje:</label><br/>
    <textarea id="message" name="message" rows="5" required></textarea><br/><br/>
    
    <button type="submit">Enviar Mensaje</button>
</form>

</div>