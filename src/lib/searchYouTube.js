var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: options,
    success: callback,
    error: function(data, a, b) {
      console.log('Error: ', data, a, b);
    }
  });  
};

window.searchYouTube = searchYouTube;
