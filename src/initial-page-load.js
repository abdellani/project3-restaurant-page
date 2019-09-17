import createElement from './helpers';

function initlizePage() {
  const root = document.getElementById('content');

  root.innerHTML = '';
  const h1Node = createElement('h1', 'Welcome to the restaurant page !');

  const navbarElements = ['menu', 'contact'];
  const navbarElementsIDs = ['menu', 'contact'];

  const ulNode = createElement('ul');

  navbarElements.forEach((text, index) => {
    const liNode = createElement('li', text);
    liNode.setAttribute('id', navbarElementsIDs[index]);
    ulNode.appendChild(liNode);
  });

  ulNode.classList.add('navbar');

  const divNode = createElement('div');
  divNode.setAttribute('id', 'tab-content');

  root.appendChild(h1Node);
  root.appendChild(ulNode);
  root.appendChild(divNode);
}
export default initlizePage;
