import {initlize_page} from "./initial-page-load"

initlize_page()
document.getElementById("menu").addEventListener("click",()=> console.log("menu clicked"))
document.getElementById("contact").addEventListener("click",()=> console.log("contact clicked"))