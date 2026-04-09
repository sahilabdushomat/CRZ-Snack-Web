// Mengambil elemen DOM
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

// Fungsi untuk membuka/tutup menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Menutup menu saat salah satu link diklik
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});