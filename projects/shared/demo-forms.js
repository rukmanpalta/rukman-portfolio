(function () {
  const forms = document.querySelectorAll('[data-demo-form]');

  forms.forEach((form) => {
    const status = form.querySelector('[data-form-status]');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        if (status) {
          status.textContent = 'Please complete the required fields before submitting.';
          status.classList.remove('is-success');
          status.classList.add('is-error');
        }
        form.reportValidity();
        return;
      }

      if (status) {
        status.textContent = 'Thank you for reaching out. Your message has been received, and I look forward to connecting with you soon.';
        status.classList.remove('is-error');
        status.classList.add('is-success');
      }

      form.reset();
    });
  });
})();
