// @flow
// $FlowFixMe
import type { ActionCreator as ReduxActionCreator } from 'redux';

export type ActionCreator<T> = ReduxActionCreator<Action<T>, T>;

export function actionCreator<T>(type: string): ActionCreator<T> {
  return (payload) => {
    return {
      type,
      payload,
    };
  };
}

export type Action<T> = {
  type: string,
  payload: ?T,
};

export type NetworkActionCreator<S, T> = {
  submit: ActionCreator<S>,
  resolved: ActionCreator<T>,
  rejected: ActionCreator<any>,
};

export function networkActionCreator<S, T>(
  type: string,
): NetworkActionCreator<S, T> {
  return {
    submit: actionCreator(`${type}__SUBMIT`),
    resolved: actionCreator(`${type}__RESOLVED`),
    rejected: actionCreator(`${type}__REJECTED`),
  };
}
