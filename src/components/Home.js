import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import '../css/home.css';

class Home extends React.Component {
	render() {
    return (
      <div className="landing-page-section1">
        <div className="hero-text-box">
          <h1>Taskify</h1>
          <h2>Organise. Produce. Conquer.</h2>
        </div>
      </div>
    )
  }
}


export default Home;
