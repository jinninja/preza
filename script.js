document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sidebar a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
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
        
        // Находим все разделы с якорями
        const sections = document.querySelectorAll('[id]');
        
        sections.forEach(section => {
            if (section.offsetTop - 80 <= window.scrollY) {
                current = section.id;
            }
        });
        
        navLinks.forEach(link => {
            if (link.href.includes(current)) {
                navLinks.forEach(nav => nav.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
});