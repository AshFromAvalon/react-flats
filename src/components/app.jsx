import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';

// import flats from '../data/flats.js'
import Flat from './flat.jsx';
import FlatList from './flat_list.jsx';
import Marker from './marker.jsx';
// import '../data/flats.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: {},
      flats: []
    };
  }

  componentDidMount() {
    const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data,
          selectedFlat: data[0]
        })
      })
  }


  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: this.state.flats[index]
    });
  }

  render() {

    const text = `${this.state.selectedFlat.price} ${this.state.selectedFlat.priceCurrency}`

    return (
      <div>
        <FlatList
          flats={this.state.flats}
          selectFlatFnc={this.selectFlat}
          selectedFlat={this.state.selectedFlat}
        />
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyA4zts-Kg1dCW3SpMiD_I3nPh53YmthHag' }}
            center={this.center()}
            zoom={11}
          >
            <Marker
               lat={this.state.selectedFlat.lat}
               lng={this.state.selectedFlat.lng}
               text={text}
             />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}


export default App;

