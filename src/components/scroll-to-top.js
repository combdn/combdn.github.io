import { useEffect } from 'react';
import { connect } from 'react-redux';

import { turnOffWorkSelection } from '../features/gallery/gallerySlice';

function ScrollToTop({ children, location, turnOffWorkSelection }) {
  useEffect(() => {
    /* Need to reset a work selection on any navigation.
     Because I scroll to the top every time, selected work makes no sense when I'm back to the home page.
    */

    turnOffWorkSelection();

    /* TODO: investigate managing scroll position in redux state. 
     It might be convenient to do it from here:
     
     1. Post previouse location and scroll postion (it will remain the same).
     2. Read position for the current location.
     3. Tell window to scroll to that position.
    */

    window.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
}

const mapDispatchToProps = {
  turnOffWorkSelection
};
export default connect(
  null,
  mapDispatchToProps
)(ScrollToTop);
