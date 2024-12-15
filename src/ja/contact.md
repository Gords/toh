---
layout: base.njk
title: Contact
---

<div class="content-container">

## お問い合わせ

<div class="contact-info">
    <p>以下のチャンネルからお気軽にお問い合わせください。</p>
    
    <ul class="contact-links">
        <li><strong>Email:</strong> <a href="mailto:fukuoka.em@gmail.com">fukuoka.em@gmail.com</a></li>
        <li><strong>Instagram:</strong> <a href="https://www.instagram.com/emifukuokag" target="_blank">@emifukuokag</a></li>
    </ul>
</div>

<p>代わりに、以下のお問い合わせフォームをご利用ください。</p>

<form class="contact-form" method="POST" data-success-message="メッセージが送信されました！" data-error-message="エラーが発生しました。">
    <input type="hidden" name="access_key" value="{{ env.web3FormsKey }}">
    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
    
    <div class="form-group">
        <label for="name">お名前</label>
        <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
        <label for="message">メッセージ</label>
        <textarea id="message" name="message" required></textarea>
    </div>
    
    <button type="submit" class="submit-button">メッセージを送信</button>
</form>

</div>