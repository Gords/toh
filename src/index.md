---
layout: base.njk
permalink: /index.html
---
<script>
  // Get browser language
  const userLang = navigator.language || navigator.userLanguage;
  
  // Simple language mapping
  const supportedLanguages = {
    'ja': '/ja/',
    'es': '/es/'
  };
  
  // Redirect based on browser language or default to English
  const redirectPath = supportedLanguages[userLang.substring(0,2)] || '/en/';
  window.location.replace(redirectPath);
</script>