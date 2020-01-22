import React from 'react';
import { Router, Link, navigate } from '@reach/router';
import Button from './button';
import Footer from './footer';

// Import cases
import CasePw from './case-pw';
import CaseAutomation from './case-automation';

export default function Case(props) {
  let caseToShow = {};
  switch (props.caseId) {
    case 'pw':
      caseToShow = <CasePw />;
      break;

    case 'automation':
      caseToShow = <CaseAutomation />;
      break;

    default:
      caseToShow = 'Oops, there’s no such case…';
      break;
  }

  return (
    <div className="page-case">
      <Button
        label={'← Gallery'}
        clickHandler={() => navigate('/')}
        look="dark-outline"
      />
      {caseToShow}
      <Footer
        variant={'case'}
        caseId={props.caseId}
        navigator={() => navigate('/')}
      />
    </div>
  );
}
