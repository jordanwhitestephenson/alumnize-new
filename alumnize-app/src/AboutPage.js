import React, {Component} from 'react';
import './App.css';

class AboutPage extends Component {
    render() {
        return (
            <div>
                <div className="back-animation back-imageAboutUs back-pro content-104">
                    <div className="damnyouReact">
                        <div className="container">
                            <div className="newrow">
                                <h1 className="newtitle">ABOUT US</h1>
                                <p className="newParagraph">
                                    Alumnize
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "teamEditContainer">
                  <div className = "outTemDiv">
                    <h1 className="team-h1">OUR TEAM</h1>
                  </div>
                <section className="cf team-container">


                    <div className="team-member">
                        <img className="team-photo" src="./imgs/AnitaProfile.jpg"/>
                        <h4>ANITA KHEDKAR</h4>
                        <span>With a nickname of "Amazing Anita", Anita loves teaching, Python and her dog Zoe  </span>
                        <a className="email" href="mailto:anita.khedkar@gmail.com">
                            <span>email</span>
                        </a>
                    </div>

                    <div className="team-member">
                        <img className="team-photo" src="./imgs/PaulProfile.jpg"/>
                        <h4>PAUL VAN DYKE</h4>
                        <span>Paul is over 6'4ft tall, loves Frosted Flakes, .NET, C#, Tesla cars and noodles in bulk </span>
                        <a className="email" href="mailto:gboss0352@gmail.com">
                            <span>email</span>
                        </a>
                    </div>


                    <div className="team-member">
                        <img className="team-photo" src="./imgs/JordanProfile.jpg"/>
                        <h4>JORDAN STEPHENSON</h4>
                        <span> Living on a 50% taco diet, Jordan is a whizz at Javascript, AngularJS and all things design.</span>
                        <a className="email" href="mailto:jordanwhitestephenson@gmail.com">
                            <span>email</span>
                        </a>
                    </div>
                    <div className="team-member">
                        <img className="team-photo" src="./imgs/PaulVProfile.jpg"/>
                        <h4>PAUL TORRES</h4>
                        <span>Paul left the financial world to become a web developer. His passions are long rides on his bike, Salesforce and free beer </span>
                        <a className="email" href="mailto:torrepaul@gmail.com">
                            <span>email</span>
                        </a>
                    </div>

                </section>
                <div className = "outTemDiv">
                <a href="#/"><img src = "./imgs/homebutton.png"/></a>
                <p> Go Home </p>
              </div>
              </div>

            </div>
        )

    }
}

export default AboutPage;
