import React from 'react';
import { Router, Link, navigate } from '@reach/router';

import Footer from './footer';

import './case.scss';

// Import cases
import CasePw from './case-pw';
import CaseAutomation from './case-automation';

export default function Case({ caseId }) {
  let caseToShow = {};
  let wrapperClass = ' case-';

  switch (caseId) {
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
        caseId={caseId}
        onHomeClick={() => {
          navigate('/');
        }}
      />
    </div>
  );
}
