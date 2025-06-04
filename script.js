document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.sidebar a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      navLinks.forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection && targetId !== 'modal' && targetId !== 'modal-img') {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('scroll', function() {
    const navLinks = document.querySelectorAll('.sidebar a');
    let current = null;

    // Находим все разделы с якорями, исключая модальное окно
    const sections = Array.from(document.querySelectorAll('[id]')).filter(section => section.id !== 'modal' && section.id !== 'modal-img');
    console.log(sections);

    sections.forEach(section => {
      if (section.offsetTop - 80 <= window.scrollY) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      const hrefId = link.getAttribute('href').substring(1);
      //console.log('hrefId:', hrefId); // Добавляем логирование
      //console.log('current:', current); // Добавляем логирование
      if (hrefId === current) {
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });
});
// Получаем все изображения
const images = document.querySelectorAll('.photo-container img');

// Получаем модальное окно и изображение внутри него
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

// Добавляем обработчик клика на каждое изображение
images.forEach(image => {
  image.addEventListener('click', function() {
    modal.style.display = 'flex';
    modalImg.src = this.src;
    document.body.style.overflow = 'hidden'; // Блокируем пролистывание страницы
  });
});

// Закрываем модальное окно при клике на крестик или вне изображения
const closeBtn = document.querySelector('.close-btn');
window.addEventListener('click', function(event) {
  if (event.target == modal || event.target == closeBtn) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Восстанавливаем пролистывание страницы
  }
});