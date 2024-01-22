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

const credentials = document.createElement('div');
credentials.id = 'credentials';

const darknab = document.createElement('p');
const darknabGithub = document.createElement('a');
darknabGithub.href = 'https://github.com/Darknab';
darknabGithub.textContent = 'Nabil Negadi';

const theOdinProject = document.createElement('a');
theOdinProject.href = 'https://www.theodinproject.com/lessons/javascript-restaurant-page';
theOdinProject.textContent = 'The Odin Project';

const span = document.createElement('span');
span.textContent = ' for ';

darknab.textContent = 'Made by ';
darknab.append(darknabGithub, span, theOdinProject);

credentials.appendChild(darknab);

const design = document.createElement('p');
const dsCode = document.createElement('a');
dsCode.href = "https://www.figma.com/community/file/1277277072882405551";
dsCode.textContent = "DS code";

design.textContent = "Design inspired (shamelessly copied) from ";
design.appendChild(dsCode);

credentials.appendChild(design);


export { footer, credentials };
