import fattoushSalad from '../src/assets/images/Fattoush-salad.png';
import vegetableSalad from '../src/assets/images/Vegetable-salad.png';
import eggSalad from '../src/assets/images/Egg-salad.png';

const menu = document.createElement('div');
menu.id = 'menu';

const menuTitle = document.createElement('h2');
menuTitle.textContent = 'Standout dishes from our menu';

const flexContainer = document.createElement('div');
flexContainer.classList.add('flex-container');

class Dish {
  constructor(image, title, description, price){
    this.image = image;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}

const fattoush = new Dish;
fattoush.image = fattoushSalad;
fattoush.title = 'Fattoush salad';
fattoush.description = 'Fattoush salad is a vibrant and refreshing Middle Eastern dish that features a colorful medley of crisp vegetables, Fattoush is not only visually appealing but also offers a lightand satisfying combination of textures and tastes.';
fattoush.price = '24.00';

const vegetable = new Dish;
vegetable.image = vegetableSalad;
vegetable.title = 'Vegetable salad';
vegetable.description = 'A classic vegetable salad is a wholesome medleyof fresh, raw vegetables, offering a burst of colors, flavors, and nutrients.It includes crisp lettuce or mixed greens, juicy tomatoes, crunchy cucumbers, vibrant bell peppers, and slices of red onion.';
vegetable.price = '26.00';

const egg = new Dish;
egg.image = eggSalad;
egg.title = 'Egg salad';
egg.description = "Egg salad is a delightful and creamy dish made by combining hard-boiled eggs with a savory dressing. It's a simple yet satisfying dish that showcases the natural goodness of eggs with a delicious blend of complementary flavors.";
egg.price = '23.00';

const dishes = [fattoush, vegetable, egg];

dishes.forEach(dish => {
  const menuCard = document.createElement('div');
  menuCard.classList.add('menu-card');

  const img = new Image();
  img.src = dish.image;

  const dishTitle = document.createElement('h3');
  dishTitle.classList = 'dish-title';
  dishTitle.textContent = dish.title;

  const dishDescription = document.createElement('p');
  dishDescription.classList.add('dish-description');
  dishDescription.textContent = dish.description;

  const dishPrice = document.createElement('p');
  dishPrice.classList.add('price');
  const dollar = document.createElement('span');
  dollar.textContent = '$';
  dishPrice.textContent = dish.price;
  dishPrice.prepend(dollar);

  menuCard.append(img, dishTitle, dishDescription, dishPrice);

  flexContainer.appendChild(menuCard);
});

menu.append(menuTitle, flexContainer);

export { menu };