---
layout: base.njk
title: Contact
---

<div class="content-container">

## Contacto

<div class="contact-info">
    <p>Puede contactarme a través de los siguientes medios:</p>

    <ul class="contact-links">
        <li><strong>Email:</strong> <a href="mailto:fukuoka.em@gmail.com">fukuoka.em@gmail.com</a></li>
        <li><strong>Instagram:</strong> <a href="https://www.instagram.com/emifukuokag" target="_blank">@emifukuokag</a></li>
    </ul>
</div>

<p>Alternativamente, puede usar el siguiente formulario de contacto:</p>

<form class="contact-form" method="POST" data-success-message="¡Mensaje enviado exitosamente!" data-error-message="¡Algo salió mal!">
    <input type="hidden" name="access_key" value="{{ web3FormsKey }}">
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
    
    <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <label for="message">Mensaje</label>
        <textarea id="message" name="message" required></textarea>
    </div>
    
    <button type="submit" class="submit-button">Enviar Mensaje</button>
</form>

</div>