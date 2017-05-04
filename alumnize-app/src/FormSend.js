import React, {Component} from 'react';
import './App.css';
import FormContainer from './containers/FormContainer';

class FormSend extends Component {
    render() {
        return (
            <div>
                <div className="back-animation back-imageCompanies back-pro content-104">
                    <div className="damnyouReact">
                        <div className="container">
                            <div className="newrow">
                                <h1 className="newtitle">DATA ADDED</h1>
                                <p className="newParagraph">
                                    Alumnize</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="columns">
                        <div className="col-md-9 goodJob1">
                          <img src = "./imgs/GoodJob.png" className = "goodJob"/>
                          <p> Congrats, your data has been saved! </p>

                        </div>
                    </div>
                </div>
                <div className = "outTemDiv">
                <a href="#/" id="openMap"><img src = "./imgs/homebutton.png"/></a>
              </div>
            </div>
        )

    }
}

export default FormSend;
