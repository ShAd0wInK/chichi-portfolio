parcelRequire=function(e,r,n){var t="function"==typeof parcelRequire&&parcelRequire,i="function"==typeof require&&require;function u(n,o){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!o&&f)return f(n,!0);if(t)return t(n,!0);if(i&&"string"==typeof n)return i(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}a.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,a,l,l.exports)}return r[n].exports;function a(e){return u(a.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=t;for(var o=0;o<n.length;o++)u(n[o]);return u}({60:[function(require,module,exports) {

},{}],59:[function(require,module,exports) {
var e=document.querySelector(".home"),t=e.offsetHeight,o=e.offsetWidth,n=document.querySelector("#gotoHome"),c=document.querySelector("#gotoIntro"),r=document.querySelector("#gotoProjects"),s=document.querySelector("#gotoCv");n.addEventListener("click",function(){window.scrollBy({top:0,left:-o,behavior:"smooth"})}),c.addEventListener("click",function(){window.scrollBy({top:t,left:0,behavior:"smooth"})}),s.addEventListener("click",function(){window.scrollBy({top:-t,left:0,behavior:"smooth"})}),r.addEventListener("click",function(){window.scrollBy({top:0,left:o,behavior:"smooth"})});var i=document.querySelector(".projects_nav"),l=document.querySelector(".projects_nav_img");i.addEventListener("mouseover",function(){l.style.transform="rotate(360deg)"}),i.addEventListener("mouseout",function(){l.style.transform=""});for(var d=document.querySelectorAll(".projectPage_header_crossBox"),u=document.querySelector("#distrib"),a=document.querySelector("#distribArticle"),v=document.querySelector("#cbz"),m=document.querySelector("#cbzArticle"),y=0;y<d.length;y++)d[y].addEventListener("click",function(){a.classList.remove("is-visible"),m.classList.remove("is-visible");for(var e=0;e<p.length;e++)p[e].classList.remove("is-open"),p[e].classList.remove("is-visible")});u.addEventListener("click",function(){a.classList.add("is-visible")}),v.addEventListener("click",function(){m.classList.add("is-visible")});var f=document.querySelector(".home_dev"),L=document.querySelector(".home_dev_points"),h=document.querySelector(".home_dev_span");f.addEventListener("mouseover",function(){L.style.display="none",h.style.display="flex"}),f.addEventListener("mouseout",function(){L.style.display="flex",h.style.display="none"});for(var p=document.querySelectorAll(".projectPage_contentBox_content"),g=document.querySelectorAll(".projectPage_contentBox_openable"),q=function(e){g[e].addEventListener("click",function(){p[e].classList.toggle("is-open"),p[e].classList.toggle("is-visible")})},S=0;S<g.length;S++)q(S);
},{}],24:[function(require,module,exports) {
"use strict";require("flexboxgrid"),require("../styles/styles.scss"),require("./script.js");
},{"flexboxgrid":60,"../styles/styles.scss":60,"./script.js":59}]},{},[24])
//# sourceMappingURL=js.95ab2566.map