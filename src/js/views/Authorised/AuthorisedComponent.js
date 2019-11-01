import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { labels } from 'configs/translations';

const AuthorisedComponent = (props) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [name] = useState(props.name || null);
  const [imageSrc] = useState(props.imageSrc || null);

  return (
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
                <ListItemText primary="Test" />
              </ListItem>
            </List>
            <List component="nav">
              <ListItem button onClick={props.logout}>
                <ListItemText primary={labels.signOut} />
              </ListItem>
            </List>
          </div>
        </Drawer>
        <nav>
          <i className="material-icons" onClick={() => setIsDrawerOpen(true)} onKeyDown={() => setIsDrawerOpen(true)}>
            menu
          </i>
          <i className="material-icons">notifications</i>
        </nav>
      </div>
    </div>
  );
};

AuthorisedComponent.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  logout: PropTypes.func,
};

export default AuthorisedComponent;
