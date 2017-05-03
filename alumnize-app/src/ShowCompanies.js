import React, {Component} from 'react';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
=======
// import Axios from 'axios'
>>>>>>> f6c46c3a56f8b08f0cb76d4decbc91deff8e8b63
=======

>>>>>>> bd8d413ad2c16f8c129d2a98ecef1eb0378381a7
import {Chart, pieChart, lineChart, PIE, CHART} from './chartmain'

let ShowCompanies = React.createClass({
  componentDidMount: function() {
    var pie = PIE()
    var chart = CHART()
    pieChart(pie)
    lineChart(chart)
  },
  render: function() {
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

                    <div id="line" className = "lineChartClassPlacement">
                      <canvas id="lineChart"  className = "lineChartClass"></canvas>
                    </div>
                    <div id="pie" className ="pieChartPlacement">
                      <canvas id="pieChart" className = "lineChartClass"></canvas>
                    </div>

          </div>
      )

  }
})

export default ShowCompanies;
