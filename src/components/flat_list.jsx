import React, {Component} from 'react';

import Flat from './flat.jsx';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map(flat =>
      <Flat
        name={flat.name}
        imageUrl={flat.imageUrl}
        price={flat.price}
        currency={flat.priceCurrency}
        key={flat.name}
      />)}
    </div>
  );
};

export default FlatList;
