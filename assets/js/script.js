
document.addEventListener('DOMContentLoaded', () => {

  const menuIcon = document.getElementById('menuIcon');
  const header = document.querySelector('header');
  const body = document.body;
  const daMode = document.getElementById('daMode');

  function darkMode() {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
      daMode.classList.remove('fa-solid', 'fa-moon');
      daMode.classList.add('fa-solid', 'fa-sun');

      localStorage.setItem("darkModeAtivado", "true");
    } else {
      daMode.classList.remove('fa-solid', 'fa-sun');
      daMode.classList.add('fa-solid', 'fa-moon');

      localStorage.setItem("darkModeAtivado", "false");
    }
  };

  if (localStorage.getItem("darkModeAtivado") === "true") {
    darkMode();
  }

  if (menuIcon) {
    menuIcon.addEventListener('click', () => {
      header.classList.toggle('menu');
    });
  }

    document.querySelectorAll('#menu ul li a').forEach(e => {e.addEventListener('click', () => {
      (document.querySelector('#menu ul li a'))
      header.classList.remove('menu')
    })})

  if (daMode) {
    daMode.addEventListener('click', darkMode);
  }

});
