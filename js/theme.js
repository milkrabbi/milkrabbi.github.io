// ===== Theme Picker =====
function setTheme(name) {
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('theme', name);
    document.querySelectorAll('.theme-swatch').forEach(s => {
        s.classList.toggle('active', s.getAttribute('data-theme') === name);
    });
}

function toggleThemePicker() {
    document.querySelector('.theme-picker-dropdown').classList.toggle('open');
}

// Apply saved theme on load
(function() {
    var saved = localStorage.getItem('theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    }
})();

// Close dropdown when clicking outside
document.addEventListener('click', function(e) {
    var picker = document.querySelector('.theme-picker');
    if (picker && !picker.contains(e.target)) {
        document.querySelector('.theme-picker-dropdown').classList.remove('open');
    }
});

// Mark active swatch on load
document.addEventListener('DOMContentLoaded', function() {
    var current = localStorage.getItem('theme') || 'saddle';
    document.querySelectorAll('.theme-swatch').forEach(s => {
        s.classList.toggle('active', s.getAttribute('data-theme') === current);
    });
});
