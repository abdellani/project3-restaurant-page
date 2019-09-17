import {initlize_page} from "./initial-page-load";
import {menu} from "./menu";
import {contact} from "./contact";
initlize_page()
document.getElementById("menu").addEventListener("click",()=> menu())
document.getElementById("contact").addEventListener("click",()=> contact())