'use strict';

const menu = document.getElementById('menu');
const menuItems = document.querySelectorAll('.menu-item');
const notificationPopup = document.getElementById('notifications-popup');

const deactivateMenuItems = function () {
  menuItems.forEach(item => item.classList.remove('active'));
};

const showNotificationPopup = function () {
  notificationPopup.style.display = 'block';
};

const hideNotificationPopup = function () {
  notificationPopup.style.display = 'none';
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
