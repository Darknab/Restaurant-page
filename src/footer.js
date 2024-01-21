const footer = document.createElement('div');
footer.id = 'footer';
footer.classList.add('flex-container');

const footerText = document.createElement('div');
footer.classList.add('footer-text');

const footerPara = document.createElement('p');
footerPara.textContent = 'Savor the artistry where ervery dish is a culinary masterpiece';

footerText.appendChild(footerPara);

footer.appendChild(footerText);

class Menu {
  constructor(title, list) {
    this.title = title;
    this.list = list;
  }
}

const usefulLinks = new Menu;
usefulLinks.title = 'Useful links';
usefulLinks.list = ['About us', 'Events', 'Blogs', 'FAQ'];

const mainMenu = new Menu;
mainMenu.title = 'Main menu';
mainMenu.list = ['Home', 'Offers', 'Menus', 'Reservation'];

const contactUs = new Menu;
contactUs.title = 'Contact us';
contactUs.list = ['example@email.com', '+111 555 55 555', 'Social Media'];

const menus = [usefulLinks, mainMenu, contactUs];

menus.forEach(element => {
  const footerMenu = document.createElement('div');
  footerMenu.classList.add('footer-menu');

  const footerTitle = document.createElement('h3');
  footerTitle.classList.add('footer-title');
  footerTitle.textContent = element.title;

  const footerList = document.createElement('ul');
  footerList.classList.add('footer-list');

  element.list.forEach(link => {
    const li = document.createElement('li');

    const a = document.createElement('a');
    a.href = '#';
    a.textContent = link;

    li.appendChild(a);
    footerList.appendChild(li);
  })

  footer.appendChild(footerList);
});


export { footer };
