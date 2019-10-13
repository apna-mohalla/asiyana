import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SnackbarComponent from 'shared/SnackbarComponent';
import { labels } from 'configs/translations';
import UnauthorisedComponent from '../Unauthorised/UnauthorisedComponent';

const AppViewComponent = (props) => {
  const { isLoggedIn, snackBar, logout } = props;
  const { message, messageType } = snackBar;

  const getLoggedInComponent = () => (
    <Button type="submit" color="primary" variant="contained" className="topSpacer" onClick={logout}>
      {labels.logout}
    </Button>
  );

  const getComponent = () => (isLoggedIn ? getLoggedInComponent() : <UnauthorisedComponent />);

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
  logout: PropTypes.func,
  updateNotification: PropTypes.func,
  snackBar: PropTypes.shape({
    message: PropTypes.string,
    messageType: PropTypes.string,
  }),
};

export default AppViewComponent;
