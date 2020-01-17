import React from 'react';
import { Router, Link, navigate } from '@reach/router';
import Button from './button';
import CasePw from './case-pw';
import Footer from './footer';

export default function Case(props) {
  let caseToShow = {};
  switch (props.caseId) {
    case 'pw':
      caseToShow = <CasePw />;
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
