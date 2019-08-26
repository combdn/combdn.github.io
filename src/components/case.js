import React from 'react';
import { Router, Link } from '@reach/router';
import Button from './button';
import Footer from './footer';
import CasePw from './case-pw';

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
    <div className="case">
      <Button label={'← Back'} />
      {caseToShow}
      <Footer variant={'case'} navigator={props.navigator} />
    </div>
  );
}
