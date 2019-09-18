import createElement from './helpers';

const contact = () => {
  document.getElementById('menu').classList.remove('selected');
  document.getElementById('contact').classList.add('selected');

  const tabContent = document.getElementById('tab-content');
  tabContent.classList.remove('menu-continer');

  tabContent.innerHTML = '';
  const form = createElement('form');
  form.appendChild(createElement('label', 'Email:'));
  form.appendChild(createElement('input'));
  form.appendChild(createElement('label', 'Name:'));
  form.appendChild(createElement('input'));
  form.appendChild(createElement('label', 'title:'));
  form.appendChild(createElement('input'));
  form.appendChild(createElement('label', 'Content:'));
  form.appendChild(createElement('textarea'));
  const submitButton = createElement('input');
  submitButton.setAttribute('value', 'submit');
  submitButton.setAttribute('type', 'submit');
  form.appendChild(submitButton);
  tabContent.append(form);
};

export default contact;
