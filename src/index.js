import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = '';
  element.classList.add('hello');

  btn.innerHTML = '';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
