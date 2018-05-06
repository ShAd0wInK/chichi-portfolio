// Moving
var home = document.querySelector('.home');
var homeHeight = home.offsetHeight;
var homeWidth = home.offsetWidth;
var gotoHome = document.querySelector('#gotoHome');
var gotoIntro =  document.querySelector('#gotoIntro');
var gotoProjects = document.querySelector('#gotoProjects');
var gotoCv = document.querySelector('#gotoCv');

gotoHome.addEventListener('click', function() {
  window.scrollBy({
    top: 0,
    left: - homeWidth,
    behavior: 'smooth'
  });
});
gotoIntro.addEventListener('click', function() {
  window.scrollBy({
    top: homeHeight,
    left: 0,
    behavior: 'smooth'
  });
});
gotoCv.addEventListener('click', function() {
  window.scrollBy({
    top: - homeHeight,
    left: 0,
    behavior: 'smooth'
  });
});
gotoProjects.addEventListener('click', function() {
  window.scrollBy({
    top: 0,
    left: homeWidth,
    behavior: 'smooth'
  });
});
