// Moving --------------
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

// github --------------
var projectsNav = document.querySelector('.projects_nav');
var projectsNavImg = document.querySelector('.projects_nav_img');

projectsNav.addEventListener('mouseover', function() {
  projectsNavImg.style.transform = 'rotate(360deg)';
});
projectsNav.addEventListener('mouseout', function() {
  projectsNavImg.style.transform = '';
});

// projectpage ---------
var cross = document.querySelector('.projectPage_header_crossBox');
var projectPage = document.querySelector('.projectPage');
var projectBoxArticle = document.querySelector('.projects_projectsBox_article')

cross.addEventListener('click', function() {
  projectPage.classList.remove('is-visible');
});
projectBoxArticle.addEventListener('click', function() {
  projectPage.classList.add('is-visible');
});

// dev -----------------

var dev = document.querySelector('.home_dev')

dev.addEventListener('mouseover', function() {
  dev.innerHTML = '&#60;developped by Alexandre Delaloy&#47;&#62;';
});
dev.addEventListener('mouseout', function() {
  dev.innerHTML = '&#60; . . . &#47;&#62;';
})
