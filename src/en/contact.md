---
layout: base.njk
title: Contact
---

<div class="content-container">

## Contact

Feel free to reach out through the following channels:

- **Email:** [fukuoka.em@gmail.com](mailto:emifukuoka@example.com)
- **Instagram:** [@emifukuokag](https://www.instagram.com/emifukuokag/)

Alternatively, you can use the contact form below:

<form action="/submit-form" method="POST">
    <label for="name">Name:</label><br/>
    <input type="text" id="name" name="name" required><br/><br/>
    
    <label for="email">Email:</label><br/>
    <input type="email" id="email" name="email" required><br/><br/>
    
    <label for="message">Message:</label><br/>
    <textarea id="message" name="message" rows="5" required></textarea><br/><br/>
    
    <button type="submit">Send Message</button>
</form>

</div>