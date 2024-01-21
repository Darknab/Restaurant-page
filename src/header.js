const header = document.createElement('div');
header.id = 'header';

const list = document.createElement('ul');

const home = document.createElement('li');
home.innerHTML = "<a href=\"#\">Home</a>"

const menu = document.createElement('li');
menu.innerHTML = "<a href=\"#\">Menu</a>";

const services = document.createElement('li');
services.innerHTML = "<a href=\"#\">Services</a>";

list.append(home, menu, services);

header.appendChild(list);

export { header };

