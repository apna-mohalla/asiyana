import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';

import DrawerMenu from './DrawerMenu';

class DashboardHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawerOpen: false,
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
  }

  toggleDrawer(drawerOpenState) {
    this.setState({
      isDrawerOpen: drawerOpenState,
    });
  }

  render() {
    return (
      <div className="dashboard-header">
        <Drawer anchor="left" open={this.state.isDrawerOpen} onClose={() => this.toggleDrawer(false)}>
          <DrawerMenu />
        </Drawer>
        <nav>
          <i className="material-icons" onClick={() => this.toggleDrawer(true)} onKeyDown={() => this.toggleDrawer(true)}>menu</i>
          <i className="material-icons">notifications</i>
        </nav>
      </div>
    );
  }
}

export default DashboardHeader;
