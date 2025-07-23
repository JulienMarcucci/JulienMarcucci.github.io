document.addEventListener('DOMContentLoaded', function () {
  // Récupère le nom de la page sans le chemin (ex: "contact.html")
  let currentPage = window.location.pathname.split('/').pop();

  // Si la page est vide (comme pour "index.html" ou la racine), on considère que c’est "accueil.html"
  if (currentPage === '' || currentPage === 'index.html') {
    currentPage = 'accueil.html';
  }

  // Parcourt tous les liens de la navbar
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');

    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active'); // sécurité : retirer les anciennes classes
    }
  });
});
