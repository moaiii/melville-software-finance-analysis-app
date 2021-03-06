// @flow
import React from 'react';
import * as Sentry from '@sentry/browser';
import SideMenu from './SideMenu/SideMenu';
import {
  Address,
  Categories,
  Invoicing,
  People,
  Variables,
} from './Subsections';

type Props = {};
type State = {};

export default class Profile extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      error: null,
      selection: 'Address', // init
    };
  }

  componentDidMount() {
    this.props.getProfileContent();
  }

  handleMenuSelection = (selection) => {
    this.setState({ selection });
  }

  setFieldContent = (config) => {
    this.props.setFieldContent(config);
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render(): React.Element<"div"> {
    const { fields, addField, removeField } = this.props;
    const { selection } = this.state;

    return (
      <div className={'Profile'}>
        <h1>Profile</h1>
        <div className="Profile__content">
          <SideMenu
            selected={selection}
            handleMenuSelection={this.handleMenuSelection} />
          <div className="Profile__window-frame">
            <Address
              addField={addField}
              removeField={removeField}
              setFieldContent={this.setFieldContent}
              fields={fields.Address}
              isVisible={selection === 'Address'} />
            <Categories
              addField={addField}
              removeField={removeField}
              setFieldContent={this.setFieldContent}
              fields={fields.Categories}
              isVisible={selection === 'Categories'} />
            <Invoicing
              addField={addField}
              removeField={removeField}
              setFieldContent={this.setFieldContent}
              fields={fields.Invoicing}
              isVisible={selection === 'Invoicing'} />
            <People
              addField={addField}
              removeField={removeField}
              setFieldContent={this.setFieldContent}
              fields={fields.People}
              isVisible={selection === 'People'} />
            <Variables
              addField={addField}
              removeField={removeField}
              setFieldContent={this.setFieldContent}
              fields={fields.Variables}
              isVisible={selection === 'Variables'} />
          </div>
        </div>
      </div>
    );
  }
}
