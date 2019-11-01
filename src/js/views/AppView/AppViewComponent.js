import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import SnackbarComponent from 'shared/SnackbarComponent';
import UnauthorisedComponent from '../Unauthorised/UnauthorisedComponent';
import AuthorisedContainer from '../Authorised/AuthorisedContainer';

const AppViewComponent = (props) => {
  /* eslint-disable object-curly-newline */
  const { isLoggedIn, snackBar, checkAuthentication, authStatus } = props;
  const { message, messageType } = snackBar;

  useEffect(() => checkAuthentication(), ['isLoggedIn']);

  const getComponent = () => (isLoggedIn ? <AuthorisedContainer /> : <UnauthorisedComponent />);

  if (authStatus.isPending) {
    return (
      <div className="align-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="cover-page">
      <SnackbarComponent
        open={message !== ''}
        message={message}
        messageId="signupmessage"
        handleClose={() => props.updateNotification('', '')}
        messageType={messageType}
      />
      {getComponent()}
    </div>
  );
};

AppViewComponent.propTypes = {
  isLoggedIn: PropTypes.bool,
  updateNotification: PropTypes.func,
  checkAuthentication: PropTypes.func,
  snackBar: PropTypes.shape({
    message: PropTypes.string,
    messageType: PropTypes.string,
  }),
  authStatus: PropTypes.object,
};

export default AppViewComponent;
