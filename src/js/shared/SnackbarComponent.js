import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

import { snackBarOptions, autoHideDuration } from 'configs/snackBar';

const useStyles = makeStyles((theme) => ({
  close: {
    padding: theme.spacing(0.5),
  },
}));

const SnackbarComponent = (props) => {
  const classes = useStyles();
  return (
    <Snackbar
      anchorOrigin={snackBarOptions}
      open={props.open}
      className={props.messageType}
      autoHideDuration={autoHideDuration}
      onClose={props.handleClose}
      ContentProps={{ 'aria-describedby': props.messageId }}
      message={<span id={props.messageId}>{props.message}</span>}
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          className={classes.close}
          onClick={props.handleClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
    />
  );
};

SnackbarComponent.propTypes = {
  handleClose: PropTypes.func.isRequired,
  messageId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  messageType: PropTypes.string,
  message: PropTypes.string,
  open: PropTypes.bool.isRequired,
};

export default SnackbarComponent;
