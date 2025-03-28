// Menggunakan DOM
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Rumus buat Onscroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ]').classList.add('active');
            });
        };
    });
};

// Rumus Menu ditambahkan Toggle
menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};