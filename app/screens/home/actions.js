import { BPRecordApi } from '../../api';

const recordApi = new BPRecordApi();

export const CREATE_RECORD = 'CREATE_RECORD';
export const CREATE_RECORD_SUCCESS = 'CREATE_MEETUP_SUCCESS';
export const CREATE_RECORD_ERROR = 'CREATE_MEETUP_ERROR';

export const FETCH_TODAY_RECORDS = 'FETCH_TODAY_RECORDS';


export const createRecord = args => async dispatch => {
  dispatch({ type: CREATE_RECORD });
  try {
    await recordApi.createGroupMeetups(args);
    dispatch({ type: CREATE_RECORD_SUCCESS });
  } catch (e) {
    return dispatch({ type: CREATE_RECORD_ERROR });
  }
  return await dispatch(fetchTodayRecords());
};


export const fetchTodayRecords = () => ({
  type: FETCH_TODAY_RECORDS,
  payload: BPRecordApi.fetchTodayRecords(),
});