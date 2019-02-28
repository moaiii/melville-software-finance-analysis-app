// @flow
import * as React from 'react';

type Props = {};
type State = {};

export default class Analytics extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount(): void {}

  shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return true;
  }

  render(): React.Element<"div"> {
    // const { } = this.props;
    // const { } = this.state;

    return (
      <div className="Analytics">
        <h1>Analytics</h1>
      </div>
    );
  }
}
