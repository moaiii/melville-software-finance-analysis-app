import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MoreIcon from '@material-ui/icons/MoreVert';

import menuRestrictedUrls from '../../../lib/utils/constants/menu-restricted-urls.json';

function PrimarySearchAppBar() {
  /**
   * Dont render on login for example
   */
  const pathIsRestricted = menuRestrictedUrls
    .some(url => url === window.location.hash);

  if (pathIsRestricted) {
    return null;
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  function handleProfileMenuOpen(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMobileMenuClose() {
    setMobileMoreAnchorEl(null);
  }

  function handleMenuClose() {
    setAnchorEl(null);
    handleMobileMenuClose();
  }

  function handleMobileMenuOpen(event) {
    setMobileMoreAnchorEl(event.currentTarget);
  }

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <CalendarTodayIcon />
        </IconButton>
        <p>Calendar view</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <CloudUploadIcon />
        </IconButton>
        <p>Upload transactions</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">
          <AttachMoneyIcon />
        </IconButton>
        <p>Graph</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={'Menu'}>
      <AppBar position="static">
        <Toolbar>
          <div className="Menu__inner">
            <IconButton className={'classes.menuButton'} color="inherit" aria-label="Open drawer">
              <MenuIcon />
            </IconButton>
            <Typography className={'classes.title'} variant="h6" color="inherit" noWrap>
              HyperMetro
            </Typography>
            <div className={'classes.grow'} />
            <div className={'classes.sectionDesktop'}>
              <IconButton color="inherit">
                <CalendarTodayIcon />
              </IconButton>
              <IconButton color="inherit">
                <CloudUploadIcon />
              </IconButton>
              <IconButton color="inherit">
                <AttachMoneyIcon />
              </IconButton>
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </div>
            <div className={'classes.sectionMobile'}>
              <IconButton aria-haspopup="true" onClick={handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      {renderMenu}
      {renderMobileMenu}
    </div>
  );
}

export default PrimarySearchAppBar;
