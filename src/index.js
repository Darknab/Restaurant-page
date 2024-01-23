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
  console.log(e.target.id);
  switch (e.target.id) {
    case 'home-btn': {
      const homeBtn = document.querySelector('#home-btn');
      console.log(`${homeBtn.id} says: ouch!`);
      activateTab(homeBtn);
      clearContent();
      content.appendChild(hero);
      break;
    }
    case 'menu-btn': {
      const menuBtn = document.querySelector('#menu-btn');
      console.log(`${menuBtn.id} says: ouch!`);
      activateTab(menuBtn);
      clearContent();
      content.appendChild(menu);
      break;
    }
    case 'services-btn': {
      const servicesBtn = document.querySelector('#services-btn');
      console.log(`${servicesBtn.id} says: ouch!`);
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
  console.log(`${active.id} is active`)
  if (active.id === tab.id) {
    return;
  } else {
    active.classList.toggle('active');
    console.log(`${active.id} is desactivated`);
    tab.classList.toggle('active');
    console.log(`${tab.id} is activated!`);
  }
}

function clearContent() {
  const content = document.querySelector('#content');
  content.innerHTML = "";
}

