import { Router } from './routes.js';

const homeLink = document.querySelector('.home');
const universeLink = document.querySelector('.universe');
const explorationLink = document.querySelector('.exploration');
const contactLink = document.querySelector('.contact');

homeLink.addEventListener('click', route); 
universeLink.addEventListener('click', route);
explorationLink.addEventListener('click', route);
contactLink.addEventListener('click', route);

const router = new Router();

router.add('/', '../pages/home.html');
router.add('/universe', '../pages/universe.html');
router.add('/exploration', '../pages/exploration.html');
router.add('/contact', '../pages/contact.html');
router.add(404, '../pages/404.html');

function route(){
    router.route();
}


window.onload = () => {
    router.changeRoute();
    onpopstate = () => router.changeRoute();
}