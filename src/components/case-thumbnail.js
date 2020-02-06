import React from 'react';
import { navigate } from '@reach/router';

import './case-thumbnail.scss';

export default function CaseThumbnail({
  image,
  name,
  underConstruction,
  link
}) {
  if (!underConstruction) {
    return (
      <div className="thumbnail ready">
        <div role="button" className="icon" onClick={() => navigate(link)}>
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
