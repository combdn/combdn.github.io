import React, { useState, useEffect } from 'react';

import './work-info.scss';

export default function WorkInfo(props) {
  return (
    <div className="work-info__root">
      <div className="work-info__background">
        <h3>{props.info.title}</h3>
        <p>{props.info.description}</p>
      </div>
    </div>
  );
}
