import initlizePage from './initial-page-load';
import menu from './menu';
import contact from './contact';

initlizePage();
document.getElementById('menu').addEventListener('click', () => menu());
document.getElementById('contact').addEventListener('click', () => contact());
