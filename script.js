document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Check for saved theme preference or use light theme as default
    const savedTheme = localStorage.getItem('cineworld-theme');
    if (savedTheme === 'dark') {
        body.classList.remove('theme-light');
        body.classList.add('theme-dark');
        themeToggle.classList.add('theme-toggle--active');
    }
    
    themeToggle.addEventListener('click', function() {
        if (body.classList.contains('theme-light')) {
            body.classList.remove('theme-light');
            body.classList.add('theme-dark');
            themeToggle.classList.add('theme-toggle--active');
            localStorage.setItem('cineworld-theme', 'dark');
        } else {
            body.classList.remove('theme-dark');
            body.classList.add('theme-light');
            themeToggle.classList.remove('theme-toggle--active');
            localStorage.setItem('cineworld-theme', 'light');
        }
    });

    // Остальной JavaScript код из предыдущего ответа
});
