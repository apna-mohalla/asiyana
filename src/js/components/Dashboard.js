import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import DashboardHeader from './DashboardHeader';
import { logout } from '../actions/signIn';
import { labels } from '../constants';

function mapStateToProps() {
  return {};
}

function dispatchActionToProps(dispatch) {
  return {
    logout: bindActionCreators(logout, dispatch),
  };
}

class Dashboard extends Component {
  constructor() {
    super();
    this.signout = this.signout.bind(this);
  }

  signout() {
    this.props.logout();
  }

  render() {
    return (
      <div className="dashboard-container">
        <DashboardHeader />
        <input type="button" value={labels.signOut} className="button primary" onClick={this.signout} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  logout: PropTypes.object,
};

export default connect(mapStateToProps, dispatchActionToProps)(Dashboard);
