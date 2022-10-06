'use strict';

const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('.menu-item');
console.log(menuItems);

const deactivateMenuItems = function () {
  menuItems.forEach(item => item.classList.remove('active'));
};

menu.addEventListener('click', e => {
  const menuItem = e.target.closest('.menu-item');
  deactivateMenuItems();
  menuItem.classList.add('active');
});
