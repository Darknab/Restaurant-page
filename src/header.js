const header = document.createElement('div');
header.id = 'header';

const homeBtn = document.createElement('button');
homeBtn.id = 'home-btn';
homeBtn.classList.add('active');
homeBtn.textContent = 'Home';

const menuBtn = document.createElement('button');
menuBtn.id = 'menu-btn';
menuBtn.textContent = 'Menu';

const servicesBtn = document.createElement('button');
servicesBtn.id = 'services-btn';
servicesBtn.textContent = 'Services';

header.append(homeBtn, menuBtn, servicesBtn);

export { header };

