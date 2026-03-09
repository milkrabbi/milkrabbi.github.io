function filterItems(topic, itemSelector, buttonSelector) {
    let items = document.querySelectorAll(itemSelector);
    let buttons = document.querySelectorAll(buttonSelector);

    // Reset all buttons
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Highlight the selected button
    event.target.classList.add('active');

    // Filter items
    if (topic === 'all') {
        items.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        items.forEach(item => {
            if (item.classList.contains(topic)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}

// ===== Theme Picker =====
function setTheme(name) {
    document.documentElement.setAttribute('data-theme', name);
    localStorage.setItem('theme', name);
    // Update active swatch
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
