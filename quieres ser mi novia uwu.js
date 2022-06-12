'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector('.hero__title');
  const heroButtonSi = document.getElementById('heroButtonSi');
  const heroButtonNo = document.querySelector('#heroButtonNo');

  const NoSomosNovios = () => {
    alert('💞 No somos nada 💞');
    alert('😱Nuestro amor sera muy fuerte uwu😱');
    location.href = 'https://www.youtube.com/watch?v=EemlA7ICn6Y';
  };

  const evitarKCRompanMyBobo = () => {
    heroButtonNo.style.position = 'absolute';
    heroButtonNo.style.top = (Math.random() * window.innerHeight) + 'px';
    heroButtonNo.style.left = (Math.random() * window.innerWidth) + 'px';
  };

  const partner = prompt('🥰 dime nombre + apellido 🥰');
  heroTitle.innerHTML += partner + ' ❤';

  heroButtonSi.addEventListener('click', NoSomosNovios);
  heroButtonNo.addEventListener('mouseover', EvitarQueMeRompanElCorazon);
};

document.addEventListener('DOMContentLoaded', documentReady);