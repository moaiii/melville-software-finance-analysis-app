// @flow
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import InboxIcon from '@material-ui/icons/Inbox';
import GestureIcon from '@material-ui/icons/Gesture';
import CategoryIcon from '@material-ui/icons/Category';


const SideMenu = ({ selected, handleMenuSelection }) => {
  return (
    <div className={'Profile__side-menu'}>
      <List component="nav">
        <ListItem
          selected={selected === 'Address'}
          button
          onClick={() => handleMenuSelection('Address')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Address" />
        </ListItem>
        <ListItem
          selected={selected === 'People'}
          button
          onClick={() => handleMenuSelection('People')}>
          <ListItemIcon>
            <FaceIcon />
          </ListItemIcon>
          <ListItemText primary="People" />
        </ListItem>
        <ListItem
          selected={selected === 'Categories'}
          button
          onClick={() => handleMenuSelection('Categories')}>
          <ListItemIcon>
            <CategoryIcon />
          </ListItemIcon>
          <ListItemText primary="Categories" />
        </ListItem>
        <ListItem
          selected={selected === 'Variables'}
          button
          onClick={() => handleMenuSelection('Variables')}>
          <ListItemIcon>
            <GestureIcon />
          </ListItemIcon>
          <ListItemText primary="Variables" />
        </ListItem>
        <ListItem
          selected={selected === 'Invoicing'}
          button
          onClick={() => handleMenuSelection('Invoicing')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Invoicing" />
        </ListItem>
      </List>
    </div>
  );
};

export default SideMenu;
