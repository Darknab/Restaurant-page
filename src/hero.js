import intersect from '../src/assets/images/Intersect.png';


  const hero = document.createElement('div');
  hero.id = 'hero';
  hero.classList.add('flex-container');

  const heroDescription = document.createElement('div');
  heroDescription.id = 'hero-description';

  const title = document.createElement('h1');
  title.textContent = 'Dive into delights of delectable ';
  const food = document.createElement('span');
  food.id = 'food';
  food.textContent = 'food';
  title.appendChild(food);

  const heroText = document.createElement('p');
  heroText.textContent = 'Where each plate weaves a story of culinary mastery and passionate craftsmanship';

  heroDescription.append(title, heroText);

  const heroImageContainer = document.createElement('div');
  heroImageContainer.id = 'hero-image-container';

  const heroImage = new Image();
  heroImage.src = intersect;
  heroImage.alt = "a woman who delights in the scents of the dishes she holds in her hands";

  const heroGreenBackground = document.createElement('div');
  heroGreenBackground.id = 'green-background';

  heroImageContainer.append(heroImage, heroGreenBackground);

  hero.append(heroDescription, heroImageContainer);

  export {hero};
