(function() {
  'use strict';

  var quoteElement = document.querySelector('#quote');

  function reqListener () {
    var response = JSON.parse(this.responseText);
    quoteElement.innerHTML = response.quote;
  }

  var oReq = new XMLHttpRequest();
  oReq.addEventListener('load', reqListener);
  oReq.open('GET', 'http://ron-swanson-quotes.herokuapp.com/quotes');
  oReq.send();

})();
