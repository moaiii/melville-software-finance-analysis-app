// @flow
// eslint-disable
import React from 'react';

type Props = {};
type State = {};

export default class Spinner extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {};
  }

  render(): React.Element<"div"> {
    const {
      isOpen,
      title,
      subtitle,
    } = this.props;

    const animateClass = isOpen
      ? '--animate'
      : '';

    return (
      <div className={`Spinner ${animateClass}`}>
        <div className={`Spinner__inner ${animateClass}`}>
          <div className="lds-ripple"><div></div><div></div></div>
          <h1 className={`Spinner__title ${animateClass}`}>
            {title}
          </h1>
          <h4 className={`Spinner__subtitle ${animateClass}`}>
            {subtitle}
          </h4>
        </div>
      </div>
    );
  }
}
