import salad from '../src/assets/images/fi-rr-salad.png';
import timeFast from '../src/assets/images/fi-rr-time-fast.png';
import shopping from '../src/assets/images/fi-rr-shopping-cart-check.png';
import gift from '../src/assets/images/fi-rr-gift.png';

const services = document.createElement('div');
services.id = 'services';
services.classList.add('flex-container');

const servicesDescription = document.createElement('div');
servicesDescription.classList = 'services-description';

const descriptionTitle = document.createElement('h2');
descriptionTitle.textContent = 'Our culinary journey and services';

const descriptionText = document.createElement('p');
descriptionText.textContent = 'Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.';

servicesDescription.append(descriptionTitle, descriptionText);

const servicesCards = document.createElement('div');
servicesCards.classList.add('services-cards');

class Card {
  constructor(image, title, description) {
    this.image = image;
    this.title = title;
    this.description = description;
  }
}

const catering = new Card;
catering.image = salad;
catering.title = 'Catering';
catering.description = 'Delight your guest with our flavours and presentation';

const delivery = new Card;
delivery.image = timeFast;
delivery.title = 'Fast delivery';
delivery.description = 'We deliver your order promptly to your door';

const ordering = new Card;
ordering.image = shopping;
ordering.title = 'Online ordering';
ordering.description = 'Explore menu & order with ease using our online ordering';

const giftCard = new Card;
giftCard.image = gift;
giftCard.title = 'Gift Cards';
giftCard.description = 'Give the gift of exceptional dining with our gift cards';

const cards = [catering, delivery, ordering, giftCard];

cards.forEach(element => {
  const servicesCard = document.createElement('div');
  servicesCard.classList.add('services-card');

  const cardImage = new Image();
  cardImage.src = element.image;

  const cardTitle = document.createElement('h3');
  cardTitle.classList.add('services-title');
  cardTitle.textContent = element.title;

  const cardDescription = document.createElement('p');
  cardDescription.classList.add('services-description');
  cardDescription.textContent = element.description;

  servicesCard.append(cardImage, cardTitle, cardDescription);

  servicesCards.appendChild(servicesCard);
});

services.append(servicesDescription, servicesCards);

export { services };