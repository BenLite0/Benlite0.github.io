document.addEventListener('DOMContentLoaded', () => {
  const copyButtons = document.querySelectorAll('.copy-btn');

  copyButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const code = button.nextElementSibling.querySelector('code');
      navigator.clipboard.writeText(code.innerText).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      }).catch(err => {
        console.error('Copy failed', err);
      });
    });
  });
});
