import React, {Component} from 'react';
import './App.css';
import FormContainer from './containers/FormContainer';


class FormPage extends Component {
    render() {
        return (
            <div>
                <div className="back-animation back-imageCompanies back-pro content-104">
                    <div className="damnyouReact">
                        <div className="container">
                            <div className="newrow">
                                <h1 className="newtitle">Alumnize</h1>
                                <p className="newParagraph">
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "outTemDiv">
                  <h1 className="team-h1">ADD YOUR DATA</h1>
                </div>
              <section className="cf team-container">
                <div className="container">
                    <div className="columns">
                        <div className="col-md-9 centered">
                            <FormContainer/>
                        </div>
                    </div>
                </div>
              </section>
                <div className = "outTemDiv" id = "buttonDiv">
                <a href="#/" id="openMap"><img src = "./imgs/homebutton.png"/></a>
              </div>
            </div>
        )

    }
}

export default FormPage;
