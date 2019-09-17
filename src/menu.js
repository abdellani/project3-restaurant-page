import createElement from './helpers';

const menuItems = {
  'main dishes': {
    items: {
      'Dish name 1': 10,
      'Dish name 2': 10,
      'Dish name 3': 10,
      'Dish name 4': 10,
      'Dish name 5': 10,
      'Dish name 6': 10,
      'Dish name 7': 10,
      'Dish name 8': 10,
    },
  },
  Sides: {
    items: {
      'Dish name 1': 10,
      'Dish name 2': 10,
      'Dish name 3': 10,
      'Dish name 4': 10,
      'Dish name 5': 10,
      'Dish name 6': 10,
      'Dish name 7': 10,
      'Dish name 8': 10,
    },
  },
  Drinks: {
    items: {
      'Dish name 1': 10,
      'Dish name 2': 10,
      'Dish name 3': 10,
      'Dish name 4': 10,
      'Dish name 5': 10,
      'Dish name 6': 10,
      'Dish name 7': 10,
      'Dish name 8': 10,
    },
  },
  Desserts: {
    items: {
      'Dish name 1': 10,
      'Dish name 2': 10,
      'Dish name 3': 10,
      'Dish name 4': 10,
      'Dish name 5': 10,
      'Dish name 6': 10,
      'Dish name 7': 10,
      'Dish name 8': 10,
    },
  },
};

function menu() {
  document.getElementById('menu').classList.add('selected');
  document.getElementById('contact').classList.remove('selected');

  const tabContent = document.getElementById('tab-content');
  tabContent.classList.add('menu-continer');

  tabContent.innerHTML = '';
  Object.keys(menuItems).forEach((subListe) => {
    const ulNode = createElement('ul');
    ulNode.setAttribute('class', 'menuList');
    ulNode.appendChild(createElement('li', subListe));
    Object.keys(menuItems[subListe].items).forEach(
      (item) => {
        ulNode.appendChild(createElement('li', `${item} : $ ${menuItems[subListe].items[item]}`));
      },
    );
    tabContent.appendChild(ulNode);
  });
}

export default menu;
