import React, {Component} from 'react';
import './App.css';

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
