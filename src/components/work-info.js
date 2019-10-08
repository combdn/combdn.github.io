import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';

import './work-info.scss';

export default function WorkInfo(props) {
  // If object is empty return empty div
  if (Object.entries(props).length === 0 && props.constructor === Object) {
    return <div />;
  }

  const { info, project, tags } = props;

  return (
    <div className="work-info__root">
      <div className="work-info__background">
        <h3>{info.title}</h3>
        <p>{info.description}</p>
        <p>{project}</p>
        <Link to={'/case/' + project}>Read the Case</Link>
      </div>
    </div>
  );
}
