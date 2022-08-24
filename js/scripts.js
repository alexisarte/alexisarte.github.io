let menu = document.querySelector('#menu');
let toggleOpen = document.querySelector('#toggle-open');
let toggleClose = document.querySelector('#toggle-close');

toggleOpen.addEventListener('click', e => toggleMenu(e));
toggleClose.addEventListener('click', e => toggleMenu(e));
menu.addEventListener('click', e => toggleMenu(e));

function toggleMenu(e) {
  if (e.target.tagName !== 'UL') {
    menu.classList.toggle('show-menu');
    if (menu.classList.contains('show-menu')) {
      toggleOpen.style.display = 'none';
      toggleClose.style.display = 'block';
    } else {
      toggleOpen.style.display = 'block';
      toggleClose.style.display = 'none';
    }
  }
}

window.onload = function () {
  const $form = document.querySelector('#form');
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
    });
    if (response.ok) {
      this.reset();
      alert('Mensaje enviado');
    }
  }
  ScrollReveal().reveal('#info-content', { delay: 500 });
  ScrollReveal().reveal('.card', { interval: 500 });
  ScrollReveal().reveal('.skills-reveal', { interval: 200 });
};
