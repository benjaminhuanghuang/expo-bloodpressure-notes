import { combineReducers } from 'redux';

import {
  HomeReducer,
  UserReducer,
  HistoryReducer
} from '../screens';

import navigation from '../routes/navigationReducer';

export default combineReducers({
  home: HomeReducer,
  user: UserReducer,
  history: HistoryReducer,
  navigation,
});