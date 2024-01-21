import '../src/assets/stylesheets/style.css';
import { header } from '../src/header';
import { hero } from './hero';
import { menu } from './menu';

const content = document.createElement('div');
content.id = 'content';

document.body.appendChild(header);
document.body.appendChild(content);
content.appendChild(hero);
content.appendChild(menu);
