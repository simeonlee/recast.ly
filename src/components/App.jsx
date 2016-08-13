class App extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      videoList: props.videos,
      currentVideo: props.videos[0]
    };
  }

  onRequest(data) {
    this.setState({
      videoList: data.items
    });
  }

  onSearch(stringQuery) {
    var options = {
      part: 'snippet',
      q: stringQuery,
      type: 'video',
      maxResults: 10,
      key: YOUTUBE_API_KEY,
      videoEmbeddable: true
    };

    searchYouTube(options, this.onRequest.bind(this));
  }

  onListItemClick(videoId) {
    console.log(videoId);
    for (var i = 0; i < this.state.videoList.length; i++) {
      var id = this.state.videoList[i].id.videoId;
      if (id === videoId) {
        this.setState({
          currentVideo: this.state.videoList[i]
        });
        break;
      }
    }
  }

  render () {
    return (
      <div>
        <Nav submitCallback={this.onSearch.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} titleClick={ (videoId) => this.onListItemClick(videoId) } />
        </div>
      </div>
    );
  }
}

// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={exampleVideoData[0]} />
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={exampleVideoData} />
//     </div>
//   </div>
// );



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;