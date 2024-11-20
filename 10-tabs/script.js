function openTab(evt, tabName) {
    // Hide all tab contents
    const tabContent = document.querySelectorAll('.tab-content');
    tabContent.forEach(content => content.style.display = 'none');

    // Remove active class from all tabs
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active'));

    // Show the selected tab and add active class
    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

// Show the first tab by default on page load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-content').style.display = 'block';
});
