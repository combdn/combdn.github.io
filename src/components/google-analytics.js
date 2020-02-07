import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

const GoogleAnalytics = ({ history }) => {
  // Send the current location to the Google Analytics
  // (By default it doesn't see the location changes by the router.)
  useEffect(() => {
    history.listen((location, action) => {
      window.gtag('config', 'UA-156429844-1', { page_path: location.pathname });
    });
  }, []);

  return null;
};

export default withRouter(GoogleAnalytics);
