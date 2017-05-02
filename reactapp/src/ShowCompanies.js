import React, {Component} from 'react';
import './App.css';
import Axios from 'axios'

class ShowCompanies extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="newtitle">
                        Companies
                    </h1>
                    <img src="http://reasonableaccommodation.com/wp-content/uploads/2015/04/orange-world-map-256.png" alt="yaaa" className="companyImage"/>
                    <p>All Companies
                    </p>

                </div>

            </div>
        )

    }
}

export default ShowCompanies;
