// @flow
import * as React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

type Props = {};
type State = {};

export default class Auth extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  // componentDidMount(): void {}

  // shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
  //   return true;
  // };

  login = () => {
    this.props.history.push('/transaction-list')
  }

  render(): React.Element<"div"> {
    
    const { } = this.props;
    const { } = this.state;

    return (
      <div className={`Auth`}>
        <Card>
          <CardContent>
            <Typography>
              Welcome to the Melville Software Finance App
            </Typography>
            <div className="Auth__container">
              <div className="text-container">
                <TextField
                  id="username"
                  label="Username"
                  placeholder="Username"
                  className={`Auth__textfield`}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="password"
                  label="Password"
                  placeholder="Password"
                  className={`Auth__textfield`}
                  margin="normal"
                  variant="outlined"
                />
              </div>
              <div className="button-container">
                <Button onClick={() => this.login()} variant="contained" className={``}>
                  Login
                </Button>
                <Button className={``}>
                  Sign Up
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}