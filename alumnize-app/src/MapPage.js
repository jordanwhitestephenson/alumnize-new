import React, {Component} from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import Map from './components/Map'
import axios from 'axios';

class MapPage extends Component {
  constructor(props){
    super(props);
    this.state={markers:[]}
  }

    componentDidMount() {
     axios.get(`https://alumnis.herokuapp.com/mock`)
       .then(res => {

         const response = res.data;
         console.log(response);
         var data =[];
         for (var i = 0; i < response.length; i++) {
           var indivMarker = {};
          indivMarker.position = {
            lat : parseFloat(response[i].lat),
            lng : parseFloat(response[i].long)
          }
           data.push(indivMarker);
         }
        this.setState({markers:data});
       });
    }

    render() {
      const location ={
        lat:39.7376,
        lng:-104.9847
      }
        return (
            <div>
                <div className="back-animation back-imageMap back-pro content-104">
                    <div className="damnyouReact">
                        <div className="container">
                            <div className="newrow">
                                <h1 className="newtitle">GRADUATE ROOTS</h1>
                                <p className="newParagraph">
                                    Alumnize</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "outTemDiv">
                <a href="#/" id="openMap"><img src = "./imgs/homebutton.png"/></a>
                <p> Go Home </p>
              </div>
              <div>
                This is the REACT APP!
                <div style={{width:900,height:600, background:'red'}}>
                  <Map center={location} markers={this.state.markers} />
                </div>
              </div>
            </div>
        )

    }
}

export default MapPage;
