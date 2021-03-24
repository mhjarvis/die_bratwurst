import { header } from './header'
import { nav } from './nav'
import { footer } from './footer'
import { home } from './home'
import { menu } from './menu'
import { contact } from './contact'
import { clear } from './clear'

header();
nav();
footer();
contact();

let homeButton = document.getElementById('home');
homeButton.onclick = () => {
    clear();
    home();
}

let menuButton = document.getElementById('menu');
menuButton.onclick = () => {
    clear();
    menu();
}

let contactButton = document.getElementById('contact');
contactButton.onclick = () => {
    clear();
    contact();
}