import React from 'react';
import { useHistory } from 'react-router-dom';

import './case-thumbnail.scss';

export default function CaseThumbnail({
  image,
  name,
  underConstruction,
  link
}) {
  let history = useHistory();

  if (!underConstruction) {
    return (
      <div className="thumbnail ready">
        <div role="button" className="icon" onClick={() => history.push(link)}>
          <img src={image} alt={name} draggable="false" />
        </div>
        <div className="name">{name}</div>
      </div>
    );
  } else {
    return (
      <div className="thumbnail under-construction">
        <div className="icon">
          <img src={image} alt={name} draggable="false" />
        </div>
        <div className="name">{name}</div>
      </div>
    );
  }
}
