'use strict';

const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('.menu-item');
const notificationPopup = document.getElementById('notifications-popup');

const deactivateMenuItems = function () {
  menuItems.forEach(item => item.classList.remove('active'));
};

const showNotificationPopup = function () {
  notificationPopup.classList.add('show');
  document.querySelector('#notification-count').style.display = 'none';
};

const hideNotificationPopup = function () {
  notificationPopup.classList.remove('show');
};

// Event Listeners
menu.addEventListener('click', e => {
  const menuItem = e.target.closest('.menu-item');
  deactivateMenuItems();
  menuItem.classList.add('active');

  if (menuItem.id === 'notifications-btn') {
    showNotificationPopup();
  }

  if (menuItem.id !== 'notifications-btn') {
    hideNotificationPopup();
  }
});

window.addEventListener('click', e => {
  if (!e.target.closest('.menu-item')) hideNotificationPopup();
});
