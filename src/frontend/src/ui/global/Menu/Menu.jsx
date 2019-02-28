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
import history from '../../../router/history';

// import menuRestrictedUrls from '../../../lib/utils/constants/menu-restricted-urls.json';

export default class MenuBar extends React.Component {
  constructor(props) {
    super();

    this.state = {
      isMenuOpen: false,
    };
  }

  componentDidMount() {
    console.log(history);
  }

  handleChangeRoute = (route) => {
    this.props.changeRoute(route);
  }

  handleMobileMenuOpen = () => {
    console.log('handleMobileMenuOpen');
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
                  <AttachMoneyIcon />
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

    // const mobileDotsButton
    //   = <div className={'classes.sectionMobile'}>
    //       <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
    //         <MoreIcon />
    //       </IconButton>
    //     </div>

    // const hamburgerButton
    //   = <IconButton className={'classes.menuButton'} color="inherit" aria-label="Open drawer">
    //       <MenuIcon />
    //     </IconButton>