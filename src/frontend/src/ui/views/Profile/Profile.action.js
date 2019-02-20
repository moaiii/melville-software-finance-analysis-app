// @flow
import { actionCreator, networkActionCreator } from '../../../lib/redux';

export const getProfileContent
  = networkActionCreator('[Profile] GET_PROFILE_CONTENT')

export const setProfileContent
  = actionCreator('[Profile] SET_PROFILE_CONTENT');

export const setFieldContent
  = actionCreator('[Profile] SET_FIELD_CONTENT');

export const addField
  = actionCreator('[Profile] ADD_FIELD');

export const removeField
  = actionCreator('[Profile] REMOVE_FIELD');