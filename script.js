const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const header = document.querySelector('header');
const content = document.querySelector('.content');

themeToggle.addEventListener('change', function() {
    if(this.checked) {
        body.setAttribute('data-theme', 'dark');
        header.setAttribute('data-theme', 'dark');
        content.setAttribute('data-theme', 'dark');
    } else {
        body.setAttribute('data-theme', 'light');
        header.setAttribute('data-theme', 'light');
        content.setAttribute('data-theme', 'light');
    }
});
