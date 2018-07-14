import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { labels } from '../constants';
import { logout } from '../actions/signIn';

function mapStateToProps(state) {
  return {
    user: state.signIn.user,
  };
}

function dispatchActionToProps(dispatch) {
  return {
    logout: bindActionCreators(logout, dispatch),
  };
}

class DashboardMenu extends Component {
  constructor(props) {
    super(props);
    this.signout = this.signout.bind(this);
  }

  signout() {
    this.props.logout();
  }

  render() {
    const name = this.props.user === null ? 'Name' : this.props.user.name;
    const imageSrc = this.props.user === null ? '' : this.props.user.image;
    return (
      <div className="drawer-menu-container">
        <header>
          <Avatar
            alt={name}
            src={imageSrc}
            sizes="small"
          />
          <h2>{name}</h2>
        </header>
        <List component="nav" className="nav-links">
          <ListItem button>
            <ListItemIcon>
              <i className="icon-home_logo" />
            </ListItemIcon>
            <ListItemText primary="Test" />
          </ListItem>
        </List>
        <List component="nav">
          <ListItem button onClick={this.signout}>
            <ListItemText primary={labels.signOut} />
          </ListItem>
        </List>
      </div>
    );
  }
}

DashboardMenu.propTypes = {
  logout: PropTypes.object,
  user: PropTypes.object,
};

export default connect(mapStateToProps, dispatchActionToProps)(DashboardMenu);
