import React, {Component} from 'react';
import ReactDOM from 'react-dom';

// import flats from '../data/flats.js'
import Flat from './flat.jsx';
import FlatList from './flat_list.jsx';
import SimpleMap from './map.jsx';
// import '../data/flats.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats: []
    }
  };

  componentDidMount() {
    const url = 'https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          flats: data
        })
      })
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats} />
        <SimpleMap />
      </div>
    );
  }
}


export default App;

