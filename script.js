
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        const isVisible = details.style.display === 'block';
        details.style.display = isVisible ? 'none' : 'block';
        button.textContent = isVisible ? 'View Details' : 'Hide Details';
    });
});
