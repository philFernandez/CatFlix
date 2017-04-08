window.onload = init;
function init() {
  var url = 'https://www.netflix.com/browse/genre/';
  var genreCode = {
    'asian action movies': '77232',
    'classic action': '46576',
    'action comedies': '43040'
  };


  let keys = Object.keys(genreCode);
  

  function getInput() {
    // gets value in text box when search is clicked
    // called by button.eventlistener below
    var userInput = document.getElementById('userInput').value;
    genreSearch(userInput);
  }

  function genreSearch(searchValue) {
    let missCount = 0;
    // checks each string key value in genreCode key array
    // for any word match
    // calls function with elements of matches
    keys.forEach(function(el) {
      if (el.indexOf(searchValue) !== -1) {
        doStuffWithResults(el); // temp name
      } else {
        // if non matchs = length of key array
        // then there was no match at all
        // probably better way exists to do this
        missCount++;
      }
      if (missCount === keys.length) {
        doStuffWithNoResults(searchValue);
      }
    });
  }

  function doStuffWithResults(searchHit) {
    console.log(searchHit);
  }

  function doStuffWithNoResults(searchMiss) {
    console.log(searchMiss, 'returned no results!');
  }

  const button = document.querySelector('.search');
  button.addEventListener('click', getInput);
}
