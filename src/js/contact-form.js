const form = document.querySelector('.contact-form');
const result = document.createElement('div');
result.id = 'form-result';
form.appendChild(result);

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    object.from_name = object.name;
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait...";

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: json
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