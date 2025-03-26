// Menu mobile toggle
const menuToggle = document.querySelector('.mobile-menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a'); // Seleciona todos os links do menu

// Alterna o menu quando o botão for clicado
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Fecha o menu quando clicar em um link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// Fecha o menu ao clicar fora dele
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.classList.remove('active');
  }
});



// Animação ao scroll
const observerOptions = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.animate').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

document.getElementById("Sobre Nós").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("Sobre Nós").scrollIntoView({ behavior: "smooth" });
});

