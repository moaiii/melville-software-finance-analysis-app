import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


class AnalyticsMenu extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  handleViewSelection = () => {
    setAnchorEl(null);
  }

  render() {
    // const timeRangeSelector = (

    // );


    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          View selection
        </Button>
        <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleViewSelection}>
          <MenuItem onClick={() => handleViewSelection}>Overview</MenuItem>
          <MenuItem onClick={() => handleViewSelection}>Income</MenuItem>
          <MenuItem onClick={() => handleViewSelection}>Expenses</MenuItem>
          <MenuItem onClick={() => handleViewSelection}>Tax</MenuItem>
          <MenuItem onClick={() => handleViewSelection}>Personal Earnings</MenuItem>
          <MenuItem onClick={() => handleViewSelection}>In/ Out</MenuItem>
          <MenuItem onClick={() => handleViewSelection}>Balance over time</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default AnalyticsMenu;
