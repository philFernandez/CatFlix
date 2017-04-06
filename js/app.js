window.onload = init;
function init() {


  // function callAPI(userQuery) {
  //   const endpoint = 'http://api-public.guidebox.com/v2/search?sources=subscription,netflix&api_key='
  //     +apiKey+'&type=movie&field=title&query='+userQuery;
  //   fetch(endpoint)
  //     .then(blob => blob.json())
  //     .then(data => render(data));
  // }

 

  function getUserQuery() {
    // gets value from search box
    const searchTerm = document.getElementsByTagName('input')[0].value;
    callAPI(searchTerm);
  }

  // function render(searchResult) {
  //   console.log(searchResult);
  //   populateMovies();
  // }


  // select button and listen for click event to kick off fn that grabs user input
  const searchButton = document.querySelector('.search');
  searchButton.addEventListener('click', getUserQuery);


}



//cc909f3c6c2cd8d9f8ba69ecc11ad19c3263707a

/*
 This url loads all available show on netflix??

 http://api-public.guidebox.com/v2/shows?sources=netflix&api_key=cc909f3c6c2cd8d9f8ba69ecc11ad19c3263707a


 return all shows with limit adjusted -

 http://api-public.guidebox.com/v2/shows?sources=netflix&limit=100&api_key=cc909f3c6c2cd8d9f8ba69ecc11ad19c3263707a

 with offset -

 http://api-public.guidebox.com/v2/shows?sources=netflix&limit=250&offset=1250&api_key=cc909f3c6c2cd8d9f8ba69ecc11ad19c3263707a
*/

/*
 This url loads all available movies on netflix??

 http://api-public.guidebox.com/v2/movies?sources=netflix&api_key=cc909f3c6c2cd8d9f8ba69ecc11ad19c3263707a
*/

/*
 Search for specific movie only on Netflix??

 http://api-public.guidebox.com/v2/search?movies?sources=netflix&api_key=cc909f3c6c2cd8d9f8ba69ecc11ad19c3263707a&type=movie&field=title&query=blow

 ? in the context below just separates search attributes
 had to add in search? before movies? and then &type=movie&field=title&query=xxxxx
*/