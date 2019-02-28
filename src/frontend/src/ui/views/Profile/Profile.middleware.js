// @flow
import { getProfileContent, setProfileContent } from './Profile.action';
import { networkRequest } from '../../../lib/network';
import { openSpinner, closeSpinner } from '../../global/Spinner/Spinner.action';

export default {
  '[Profile] SET_FIELD_CONTENT': async (store, next, action) => {
    // const {}
  },


  '[Profile] GET_PROFILE_CONTENT__SUBMIT': async (store, next, action) => {
    store.dispatch(openSpinner({
      title: 'Fetching profile information',
      subtitle: 'This may take a moment',
    }));

    const config = {
      method: 'GET',
      url: `${process.env.REACT_APP_API_BASE_URL}/profile`,
    };

    try {
      const res = await networkRequest(config);
      store.dispatch(getProfileContent.resolved(res.data.Items));
      // store.dispatch(setProfileContent(res.data.Items));
      store.dispatch(closeSpinner());
    } catch (error) {
      console.error('[HYPER METRO] get profile middleware', error);
      store.dispatch(getProfileContent.rejected(error));
    }
  },
};
