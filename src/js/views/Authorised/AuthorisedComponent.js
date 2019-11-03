import React, { useState } from 'react';
import {
  HashRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SettingsIcon from '@material-ui/icons/Settings';

import { labels, dashboardText } from 'configs/translations';
import paths from 'configs/paths';
import DashboardComponent from '../../component/Dashboard/DashboardComponent';
import ServicesComponent from '../../component/Services/ServicesComponent';

const AuthorisedComponent = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [name] = useState(props.name || null);
  const [imageSrc] = useState(props.imageSrc || null);

  return (
    <Router>
      <div className="dashboard-container">
        <div className="dashboard-header">
          <Drawer anchor="left" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <div className="drawer-menu-container">
              <header>
                <Avatar alt={name} src={imageSrc} sizes="small" />
                <h2>{name}</h2>
              </header>
              <List component="nav" className="nav-links">
                <ListItem button>
                  <ListItemIcon>
                    <i className="icon-home-logo" />
                  </ListItemIcon>
                  <Link to={paths.baseUrl}>
                    <ListItemText primary={labels.home} />
                  </Link>
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <Link to={paths.services}>
                    <ListItemText primary={dashboardText.services} />
                  </Link>
                </ListItem>
              </List>
              <List component="nav" className="nav-links-footer">
                <ListItem button onClick={props.logout}>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary={labels.signOut} />
                </ListItem>
              </List>
            </div>
          </Drawer>
          <nav>
            <i className="material-icons" onClick={() => setIsDrawerOpen(true)} onKeyDown={() => setIsDrawerOpen(true)}>
              {dashboardText.menu}
            </i>
            <i className="material-icons">{dashboardText.notification}</i>
          </nav>
        </div>
        <div className="dashboard-content">
          <Switch>
            <Route path={paths.baseUrl} exact>
              <DashboardComponent />
            </Route>
            <Route path={paths.services}>
              <ServicesComponent />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

AuthorisedComponent.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  logout: PropTypes.func,
};

export default AuthorisedComponent;
