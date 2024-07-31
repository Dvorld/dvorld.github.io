document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const searchBox = document.getElementById('searchBox');
    const navLinks = document.querySelectorAll('#navList a');
    const themeToggle = document.getElementById('themeToggle');
    const fontSelector = document.getElementById('fontSelector');
    const fontSizeSelector = document.getElementById('fontSizeSelector');

    // Toggle sidebar visibility
    sidebarToggle.addEventListener('click', function () {
        if (sidebar.classList.contains('hidden')) {
            sidebar.classList.remove('hidden');
            document.querySelector('.content').style.marginLeft = '250px'; // Adjust content margin when sidebar is shown
        } else {
            sidebar.classList.add('hidden');
            document.querySelector('.content').style.marginLeft = '0'; // Adjust content margin when sidebar is hidden
        }
    });

    // Search filter functionality
    searchBox.addEventListener('input', function () {
        const query = searchBox.value.toLowerCase();
        navLinks.forEach(link => {
            const text = link.textContent.toLowerCase();
            if (text.includes(query)) {
                link.style.display = '';
            } else {
                link.style.display = 'none';
            }
        });
    });

    // Toggle between themes
    themeToggle.addEventListener('click', function () {
        const themes = ['light-theme', 'dark-theme', 'blue-theme', 'green-theme', 'red-theme'];
        const currentTheme = document.body.classList[0];
        const nextThemeIndex = (themes.indexOf(currentTheme) + 1) % themes.length;
        document.body.className = themes[nextThemeIndex];
    });

    // Change font family
    fontSelector.addEventListener('change', function () {
        document.body.style.fontFamily = fontSelector.value;
    });

    // Change font size
    fontSizeSelector.addEventListener('change', function () {
        document.body.style.fontSize = fontSizeSelector.value;
    });
});
