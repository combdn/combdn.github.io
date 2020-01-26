import React from 'react';
import { Router, Link, navigate } from '@reach/router';
import Button from './button';
import Footer from './footer';

import './case.scss';

// Import cases
import CasePw from './case-pw';
import CaseAutomation from './case-automation';

export default function Case(props) {
  let caseToShow = {};
  let wrapperClass = ' case-';

  switch (props.caseId) {
    case 'pw':
      caseToShow = <CasePw />;
      wrapperClass += 'pw';
      break;

    case 'automation':
      caseToShow = <CaseAutomation />;
      wrapperClass += 'automation';
      break;

    default:
      caseToShow = 'Oops, there’s no such case…';
      wrapperClass += 'none';
      break;
  }

  return (
    <div className={'page-case' + wrapperClass}>
      {caseToShow}
      <Footer
        variant={'case'}
        caseId={props.caseId}
        navigator={() => navigate('/')}
      />
    </div>
  );
}
