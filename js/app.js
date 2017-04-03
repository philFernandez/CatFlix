window.onload = init;
function init() {

  
  // api fetch from here...
  function fetchData(callback) {
    const endpoint = 'http://netflixroulette.net/api/api.php?title=Attack%20on%20titan';
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => callback(data));
  }

  function getData() {
    fetchData(function(data) {
      console.log(data);      
    });
  }
  // to here.

  function doit() {
    // gets value from search box
    let searchTerm = document.getElementsByTagName('input')[0].value;
    console.log(searchTerm);
  }
  // select button and listen for click event to kick off fn that grabs user input
  const searchButton = document.querySelector('.search');
  searchButton.addEventListener('click', doit);


  // temp intiation. needs to be implimented with user search term
  getData();
}

