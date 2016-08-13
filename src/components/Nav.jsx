var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search submitCallback={ props.submitCallback } />
    </div>
    <button className="btn btn-primary autoplay" onClick={ props.autoplayToggle }>Autoplay</button>
  </nav>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
