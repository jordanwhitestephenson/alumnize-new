import React, {Component} from 'react';
import './App.css';
import '../public/main.css'



class LandingPage extends Component {
  render(){
    return <div>
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
