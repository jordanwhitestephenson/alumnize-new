import React, {Component} from 'react';
import './App.css';
import '../public/main.css'



class LandingPage extends Component {
  render(){
    return <div>
      <div className="back-animation back-image back-pro content-104">
  <div className = "damnyouReact">
  <div className="container">
    <div className="newrow">
      <h1 className="newtitle">Alumnize</h1>
      <p className = "newParagraph"> WHERE WORLD CLASS DEVELOPERS WORK</p>
    </div>
  </div>
  </div>
</div>
    <section>
        <div id="icon-wrapper">
            <a href="#/AboutPage" id="openMap">
            <center>
            <h1> Welcome To Alumnize </h1>
          </center>
                <div className="icons">
                    <div className="icon-slide-container">
                        <img className="slide-icon" height="100" src="./imgs/About.jpg" alt = "ya"/></div>
                    </div>
                </a>

                <a href="#/MapPage">
                    <div className="icons2">
                        <div className="icon-slide-container">
                            <img className="slide-icon" height="100" src="./imgs/Graduates.jpg"/></div>
                        </div>
                    </a>

                    <a href="#/ShowCompanies">
                        <div className="icons3">
                            <div className="icon-slide-container">
                                <img className="slide-icon" height="100" src="./imgs/Companies.jpg" alt= "ya"/></div>
                            </div>
                        </a>

                        <a href="#/FormPage">
                            <div className="icons4">
                                <div className="icon-slide-container">
                                    <img className="slide-icon" height="100" src="./imgs/AddData.jpg" alt= "ya" /></div>
                                </div>
                            </a>
                        </div>
                    </section>
                  </div>

  }
}

export default LandingPage;
