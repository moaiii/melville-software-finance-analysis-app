import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ListIcon from '@material-ui/icons/List';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import history from '../../../router/history';

// import menuRestrictedUrls from '../../../lib/utils/constants/menu-restricted-urls.json';

export default class MenuBar extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isMenuOpen: false,
    };
  }

  handleChangeRoute = (route) => {
    this.props.changeRoute(route);
  }

  render() {
    const { isMenuOpen } = this.state;

    return (
      <div className={'Menu'}>
        <AppBar position="static">
          <Toolbar>
            <div className="Menu__inner">
              <Typography className={'classes.title'} variant="h6" color="inherit" noWrap>
                HyperMetro
              </Typography>
              <div className={'classes.grow'} />
              <div className={'classes.sectionDesktop'}>
                <IconButton
                  color="inherit"
                  onClick={() => this.handleChangeRoute('/calendar')}>
                  <CalendarTodayIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => this.handleChangeRoute('/transaction-upload')}>
                  <CloudUploadIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => this.handleChangeRoute('/transaction-list')}>
                  <ListIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => this.handleChangeRoute('/invoices')}>
                  <AttachMoneyIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  onClick={() => this.handleChangeRoute('/analytics')}>
                  <TrendingUpIcon />
                </IconButton>
                <IconButton
                  aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={() => this.handleChangeRoute('/profile')}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
