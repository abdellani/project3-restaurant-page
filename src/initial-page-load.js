import {
  createElement
} from "./helpers"

function initlize_page() {
  let root = document.getElementById("content")

  root.innerHTML = '';
  let h1Node = createElement("h1", "Welcome to the restaurant page !");

  let navbarElements = ["menu", "contact"]
  let navbarElementsIDs = ["menu", "contact"]

  let ulNode = createElement("ul")
 
  navbarElements.forEach((text, index) => {
    let liNode = createElement("li", text)
    liNode.setAttribute("id", navbarElementsIDs[index])
    ulNode.appendChild(liNode)
  })
 
  ulNode.classList.add("navbar")
  
  let divNode = createElement("div")
  divNode.setAttribute("id", "tab-content")

  root.appendChild(h1Node);
  root.appendChild(ulNode);
  root.appendChild(divNode)
}
export {
  initlize_page
};