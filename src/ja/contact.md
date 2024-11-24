---
layout: base.njk
title: Contact
---

<div class="content-container">

## お問い合わせ

以下のチャンネルからお気軽にお問い合わせください。

- **Email:** [fukuoka.em@gmail.com](mailto:fukuoka.em@gmail.com)
- **Instagram:** [@emifukuokag](https://www.instagram.com/emifukuokag/)

代わりに、以下のお問い合わせフォームをご利用ください。

<form action="/submit-form" method="POST">
    <label for="name">お名前:</label><br/>
    <input type="text" id="name" name="name" required><br/><br/>
    
    <label for="email">メールアドレス:</label><br/>
    <input type="email" id="email" name="email" required><br/><br/>
    
    <label for="message">メッセージ:</label><br/>
    <textarea id="message" name="message" rows="5" required></textarea><br/><br/>
    
    <button type="submit">メッセージを送信</button>
</form>

</div>