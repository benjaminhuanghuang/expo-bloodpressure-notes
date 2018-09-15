import { combineReducers } from 'redux';

import {
  HomeReducer,
  UserReducer,
} from '../screens';

// import navigation from '../routes/navigationReducer';

export default combineReducers({
  home: HomeReducer,
  user: UserReducer,
  // navigation,
});