import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useHistory, withRouter } from 'react-router-dom';

import { turnOffWorkSelection } from '../features/gallery/gallerySlice';

function ScrollToTop({ children, turnOffWorkSelection }) {
  const { pathname } = useLocation();
  useEffect(() => {
    /* Need to reset a work selection on any navigation.
     Because I scroll to the top every time, selected work makes no sense when I'm back to the home page.
    */

    turnOffWorkSelection();

    /* TODO: investigate managing scroll position in redux state. 
     It might be convenient to do it from here:
     
     1. Post the previouse location and scroll postion (it will remain the same).
     2. Read position for the current location.
     3. Tell window to scroll to that position.
    */

    window.scrollTo(0, 0);
  }, [pathname]);
  return children;
}

const mapDispatchToProps = {
  turnOffWorkSelection
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(ScrollToTop)
);
