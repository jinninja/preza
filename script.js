document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.sidebar a');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // предотвращаем стандартное поведение ссылки
            
            // Удаляем класс active у всех элементов
            navItems.forEach(navItem => navItem.classList.remove('active'));
            
            // Добавляем класс active текущему элементу
            this.classList.add('active');
            
            
        });
    });
    
    // Автоматическое выделение активного элемента при прокрутке
    window.onscroll = function() {
        const sections = document.querySelectorAll('h2');
        const navLinks = document.querySelectorAll('.sidebar a');
        let cur;
        
        sections.forEach(section => {
            if(section.offsetTop - 80 <= window.scrollY) { // компенсируем высоту сайдбара
                cur = section.id;
            }
        });
        
        navLinks.forEach(link => {
            if(link.href.includes(cur)) {
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            }
        });
    };
});