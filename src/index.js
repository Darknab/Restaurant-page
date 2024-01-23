import '../src/assets/stylesheets/style.css';
import { header } from '../src/header';
import { hero } from './hero';
import { menu } from './menu';
import { services } from './services';
import { footer, credentials } from './footer';

const content = document.querySelector('#content');

document.body.prepend(header);

content.appendChild(hero);

document.body.append(footer, credentials);

addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'home-btn': {
      const homeBtn = document.querySelector('#home-btn');
      activateTab(homeBtn);
      clearContent();
      content.appendChild(hero);
      break;
    }
    case 'menu-btn': {
      const menuBtn = document.querySelector('#menu-btn');
      activateTab(menuBtn);
      clearContent();
      content.appendChild(menu);
      break;
    }
    case 'services-btn': {
      const servicesBtn = document.querySelector('#services-btn');
      activateTab(servicesBtn);
      clearContent();
      content.appendChild(services);
      break;
    }
  }
});

function checkActiveTab() {
  const active = document.querySelector('.active');
  return active;
}

function activateTab(tab) {
  const active = checkActiveTab()
  if (active.id === tab.id) {
    return;
  } else {
    active.classList.toggle('active');
    tab.classList.toggle('active');
  }
}

function clearContent() {
  const content = document.querySelector('#content');
  content.innerHTML = "";
}

