let menu = document.querySelector('#menu');
let toggleOpen = document.querySelector('#toggle-open');
let toggleClose = document.querySelector('#toggle-close');

toggleOpen.addEventListener('click', toggleMenu);
toggleClose.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('show-menu');
    if (menu.classList.contains('show-menu')) {
        toggleOpen.style.display = 'none';
        toggleClose.style.display = 'block';
    } else {
        toggleOpen.style.display = 'block';
        toggleClose.style.display = 'none';
    }
}

window.onload = function () {
    const $form = document.querySelector('.form-group');
    // const $buttonMailto = document.querySelector('#trucazo');
    $form.addEventListener('submit', handleSubmit);

    async function handleSubmit(event) {
        event.preventDefault();
        const form = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                Accept: 'application/json',
            },
        })
        if (response.ok) {
            this.reset()
            alert('Mensaje enviado');
        }
        // $buttonMailto.setAttribute('href', `mailto:alexisrodriguezarteaga@gmail.com?subject=${form.get('name')}&body=${form.get('message')}`);
        // $buttonMailto.click();
    }
};
