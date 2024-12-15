---
layout: base.njk
title: Contact
---

<div class="content-container">

# Contact

<div class="contact-info">
    <p>Feel free to reach out through the following channels:</p>
    
    <ul class="contact-links">
        <li><strong>Email:</strong> <a href="mailto:fukuoka.em@gmail.com">fukuoka.em@gmail.com</a></li>
        <li><strong>Instagram:</strong> <a href="https://www.instagram.com/emifukuokag" target="_blank">@emifukuokag</a></li>
    </ul>
</div>

<p>Alternatively, you can use the contact form below:</p>

<form class="contact-form" method="POST" data-success-message="Message sent successfully!" data-error-message="Something went wrong!">
    <input type="hidden" name="access_key" value="{{ env.web3FormsKey }}">
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
    
    <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" required></textarea>
    </div>
    
    <button type="submit" class="submit-button">Send Message</button>
</form>

</div>