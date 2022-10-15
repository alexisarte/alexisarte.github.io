window.onload = function () {
  const menu = document.querySelector('#menu');
  const toggleOpen = document.querySelector('#toggle-open');
  const toggleClose = document.querySelector('#toggle-close');
  const $form = document.querySelector('#form');

  toggleOpen.addEventListener('click', (e) => toggleMenu(e));
  toggleClose.addEventListener('click', (e) => toggleMenu(e));
  menu.addEventListener('click', (e) => toggleMenu(e));

  /**
   * Function to show/hide the navigation bar on mobile devices
   * @param e The onclick event
   */
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

  $form.addEventListener('submit', handleSubmit);

  /**
   * Function to send the form to formspree
   * @param event The submit event
   */
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
      /*global swal*/
      swal({
        title: 'Mensaje enviado',
        icon: 'success',
      });
    }
  }

  ScrollReveal().reveal('#info-content', { delay: 500 });
  ScrollReveal().reveal('.cards-reveal', { interval: 500 });
  ScrollReveal().reveal('.skills-reveal', { interval: 200 });
};
