var jsSpan = document.querySelector('.jsBox_title_span');

jsSpan.innerHTML = 'connected';
jsSpan.style.color = '#02a000';

var textarea = document.querySelector('.jsBox_textarea');
var nb = document.querySelector('.jsBox_text_span');
var prog = document.querySelector('.jsBox_progressBar-active')

textarea.addEventListener('input', function() { // when  the user change the textarea
  var nbChar = textarea.value.length; // take the number of characters
  var nb_max = 0; // init the max at 0
  nb.textContent = nbChar; // change the value in the HTML
  if (nbChar > 50) { // when the limit is  reached
    nb_max = 50;
    nb.style.color = "red"; // change style
    nb.style.fontWeight = "bold"; // change style
    prog.style.background = "red"; // change style
  } else {
    nb_max = nbChar;
    nb.style.color = "";
    prog.style.background = "";
  }
  var percent = nb_max * 100 / 50; // the percent of the progressBar
  prog.style.width = percent + '%'; // fill the progressBar
});
