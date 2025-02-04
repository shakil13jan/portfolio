    // toggle icon navbar



let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}

let section = document.querySelectorAll('section')
let nevlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetHeight;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('stickly', window.scrolly > 100);

    // remove toggle icon and navbar

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*=======================================================================Scrool Revel======================================================*/

ScrollReveal({
    distance:'80px',
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content,heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-content h1, .about-img' , { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

/*=======================================================================Scrool Revel======================================================*/
const typed = new Typed('.multiple-text',{
    strings: ['Lubricants Expert', 'Transport Expert', 'Travel Agency'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop: true,
});