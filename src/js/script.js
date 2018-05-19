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
var cross = document.querySelectorAll('.projectPage_header_crossBox');
var distrib = document.querySelector('#distrib');
var distribArticle = document.querySelector('#distribArticle');
var cbz = document.querySelector('#cbz');
var cbzArticle = document.querySelector('#cbzArticle');

for (var i = 0; i < cross.length; i++) {
  cross[i].addEventListener('click', function() {
    distribArticle.classList.remove('is-visible');
    cbzArticle.classList.remove('is-visible');
  });
}
distrib.addEventListener('click', function() {
  distribArticle.classList.add('is-visible');
});
cbz.addEventListener('click', function() {
  cbzArticle.classList.add('is-visible');
});

// dev -----------------

var dev = document.querySelector('.home_dev');
var devPoints = document.querySelector('.home_dev_points');
var devSpan = document.querySelector('.home_dev_span');

dev.addEventListener('mouseover', function() {
  devPoints.style.display = 'none';
  devSpan.style.display = 'flex';
});
dev.addEventListener('mouseout', function() {
  devPoints.style.display = 'flex';
  devSpan.style.display = 'none';
})

// content

var projectContent = document.querySelectorAll('.projectPage_contentBox_content');
var projectOpenable = document.querySelectorAll('.projectPage_contentBox_openable');
var projectImgs = document.querySelectorAll('projectPage_contentBox_content_img');

for (let i = 0; i < projectOpenable.length; i++) {
  projectOpenable[i].addEventListener('click', function() {
    projectContent[i].classList.toggle('is-open');
    projectContent[i].classList.toggle('is-visible');
    projectImgs[i].classList.toggle('is-scaled');
  })
}
