import React, {Component} from 'react';
import './App.css';
import FormContainer from './containers/FormContainer';
// import formPayload from './containers/FormContainer';

class FormPage extends Component {
    render() {
        return (
            <div>
                <div className="back-animation back-imageCompanies back-pro content-104">
                    <div className="damnyouReact">
                        <div className="container">
                            <div className="newrow">
                                <h1 className="newtitle">ADD YOUR DATA</h1>
                                <p className="newParagraph">
                                    Alumnize</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {/* <div className = "graduateData">
                    <h1 className="newtitle">
                        {FormContainer.formPayload}
                    </h1>
                  </div> */}
                    <img src="http://usacdn.markmods.com/site/images/siemaIcons/256/globe%20orange.png" height="50px" width="50px" alt="yaaa"/>
                </div>
                <div className="container">
                    <div className="columns">
                        <div className="col-md-9 centered">
                            <FormContainer/>

                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default FormPage;
