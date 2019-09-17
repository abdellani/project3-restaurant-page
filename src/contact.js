import {createElement} from "./helpers"
function contact() { 
  document.getElementById("menu").classList.remove("selected")
  document.getElementById("contact").classList.add("selected")
  
  let tabContent = document.getElementById("tab-content")
  tabContent.classList.remove("menu-continer")

  tabContent.innerHTML = ""
  let form = createElement("form")
  form.appendChild(createElement("label", "Email:"))
  form.appendChild(createElement("input"))
  form.appendChild(createElement("label", "Name:"))
  form.appendChild(createElement("input"))
  form.appendChild(createElement("label", "title:"))
  form.appendChild(createElement("input"))
  form.appendChild(createElement("label", "Content:"))
  form.appendChild(createElement("textarea"))
  let submitButton = createElement("input")
  submitButton.setAttribute("value", "submit")
  submitButton.setAttribute("type", "submit")
  form.appendChild(submitButton)
  tabContent.append(form)

}

export {
  contact
}