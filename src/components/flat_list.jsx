import React, {Component} from 'react';

import Flat from './flat.jsx';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat, index) =>
      <Flat
        flat={flat}
        selectFlat={props.selectFlatFnc}
        selectedFlat={flat.name === props.selectedFlat.name}
        index={index}
        key={flat.name}
      />)}
    </div>
  );
};

export default FlatList;
