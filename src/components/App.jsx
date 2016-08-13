class App extends React.Component {
  
  constructor (props) {
    super(props);

    this.state = {
      videoList: props.videos,
      currentVideo: props.videos[0]
    };
  }

  onListItemClick(videoId) {
    console.log('CLICKED!');
    for (var i = 0; i < this.props.videos.length; i++) {
      var id = this.props.videos[i].id.videoId;
      if (id === videoId) {
        this.setState({
          currentVideo: this.props.videos[i]
        });
        break;
      }
    }
  }

  render () {
    return (
      <div>
        <Nav />
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