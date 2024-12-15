const form = document.querySelector('.contact-form');
const result = document.createElement('div');
result.id = 'form-result';
form.appendChild(result);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Create FormData object
    const formData = new FormData(form);
    
    // Convert to URL encoded string (instead of JSON)
    const urlEncodedData = new URLSearchParams(formData).toString();
    
    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: urlEncodedData
    })
    .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
            result.innerHTML = form.getAttribute('data-success-message');
            form.reset();
        } else {
            console.log(response);
            result.innerHTML = json.message;
        }
    })
    .catch(error => {
        console.log(error);
        result.innerHTML = form.getAttribute('data-error-message');
    })
    .then(function() {
        setTimeout(() => {
            result.style.display = "none";
        }, 5000);
    });
});