function initlize_page() {
  document.getElementById("content").innerHTML = `
  <h1>Welcome !</h1>
  <ul>
    <li id="menu">
      Menu
    </li>
    <li id="contact">
      Contact
    </li>
  </ul>
  <div id="tab-content">
  </div>
  `

}
export {
  initlize_page
};