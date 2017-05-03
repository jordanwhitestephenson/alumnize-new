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
            <div className="back-animation back-imageData back-pro content-104">
                <div className="damnyouReact">
                    <div className="container">
                        <div className="newrow">
                            <h1 className="newtitle">GRADUATE DATA</h1>
                            <p className="newParagraph">
                                Alumnize</p>
                        </div>
                    </div>
                </div>
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
