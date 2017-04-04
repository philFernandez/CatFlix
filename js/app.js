window.onload = init;
function init() {

  const apiKey = 'cc909f3c6c2cd8d9f8ba69ecc11ad19c3263707a';

  function callAPI(userQuery) {
    const endpoint = 'http://api-public.guidebox.com/v2/search?sources=subscription,netflix&api_key='
      +apiKey+'&type=movie&field=title&query='+userQuery;
    fetch(endpoint)
      .then(blob => blob.json())
      .then(data => render(data));
  }
  


  function getUserQuery() {
    // gets value from search box
    const searchTerm = document.getElementsByTagName('input')[0].value;
    callAPI(searchTerm);
  }

  function render(searchResult) {
    console.log(searchResult);
  }


  // select button and listen for click event to kick off fn that grabs user input
  const searchButton = document.querySelector('.search');
  searchButton.addEventListener('click', getUserQuery);


}



//cc909f3c6c2cd8d9f8ba69ecc11ad19c3263707a