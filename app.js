"use strict"
function $(x) {return document.getElementById(x);}
const imgRight = document.querySelectorAll('.content__image--right');
const imgLeft = document.querySelectorAll('.content__image--left');
const windowHeight = document.documentElement.clientHeight;
const nav = document.querySelectorAll('.nav__section');
const logo = document.querySelector('.nav__logo');
const navScroll = document.querySelectorAll('.nav__section ul li');
const btnDown = document.querySelector('.button__down')

logo.addEventListener('click', () => {
  nav.forEach(elem => elem.classList.toggle('hide'))
}
);

btnDown.addEventListener('click', () => {
  $('table').scrollIntoView({block: "start", behavior: "smooth"})
})

navScroll.forEach(elem => elem.addEventListener('click', ()=>{
  let scrollItem = elem.dataset.scroll;
  $(scrollItem).scrollIntoView({block: "start", behavior: "smooth"})
}));


let imgRightPos = [];
if(imgRight.length > 0) {
  imgRight.forEach(elem => 
    imgRightPos.push(elem.getBoundingClientRect().top + pageYOffset))
    animRightLoadChek ();
};
function animRightLoadChek () {
  let imgIndex = imgRightPos.findIndex(
    item => pageYOffset > item - windowHeight
  );
  if(imgIndex >= 0) {
    let i = -50;
    let interval = setInterval(() => {
      i++;
      let imgLoad = i + '%';
      imgRight[imgIndex].style.right = imgLoad;
      if (i >= 0) {
        clearInterval(interval)
      }
    }, 30); 
  }
  delete imgRightPos[imgIndex];
};

let imgLeftPos = [];
if(imgLeft.length > 0) {
  imgLeft.forEach(elem => 
    imgLeftPos.push(elem.getBoundingClientRect().top + pageYOffset))
    animLeftLoadChek ();
};
function animLeftLoadChek () {
  let imgIndex = imgLeftPos.findIndex(
    item => pageYOffset > item - windowHeight
  );
  if(imgIndex >= 0) {
    let i = -50;
    let interval = setInterval(() => {
      i++;
      let imgLoad = i + '%';
      imgLeft[imgIndex].style.left = imgLoad;
      if (i >= 0) {
        clearInterval(interval)
      }
    }, 30); 
  }
  delete imgLeftPos[imgIndex];
};

window.addEventListener('scroll', () => {
  if (document.querySelectorAll('.content__image--right').length > 0) {
    animRightLoadChek ();
  }
  if (document.querySelectorAll('.content__image--left').length > 0) {
    animLeftLoadChek ();
  }
});


