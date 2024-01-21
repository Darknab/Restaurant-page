import '../src/assets/stylesheets/style.css';
import { displayHeader } from '../src/header';
import { hero } from './hero';

const content = document.createElement('div');
content.id = 'content';

displayHeader();
document.body.appendChild(content);
content.appendChild(hero);
