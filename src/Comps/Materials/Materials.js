import React from 'react';
import Material from './Material';

function Materials(props) {
  let materials = props.mats.map(material => (
    <Material key={material[0].type} money={props.money} mat={material} />
  ));

  return <div className='Materials'>{materials}</div>;
}

export default Materials;
