import React from 'react';
import PropTypes from 'prop-types';
import UnauthorisedComponent from '../Unauthorised/UnauthorisedComponent';

const AppViewComponent = (props) => {
  if (props.isLoggedIn) {
    return <div>Dashboard should come here</div>;
  }
  return <UnauthorisedComponent />;
};

AppViewComponent.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default AppViewComponent;
