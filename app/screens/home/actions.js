import moment from 'moment';
import { BPRecordApi } from '../../api';

const recordApi = new BPRecordApi();

export const CREATE_RECORD = 'CREATE_RECORD';
export const CREATE_RECORD_SUCCESS = 'CREATE_RECORD_SUCCESS';
export const CREATE_RECORD_ERROR = 'CREATE_RECORD_ERROR';

export const FETCH_TODAY_RECORDS = 'FETCH_TODAY_RECORDS';
export const FETCH_TODAY_RECORDS_SUCCESS = 'FETCH_TODAY_RECORDS_SUCCESS';
export const FETCH_TODAY_RECORDS_ERROR = 'FETCH_TODAY_RECORDS_ERROR';


export const createRecord = args => async dispatch => {
  dispatch({ type: CREATE_RECORD });
  try {
    const record = await recordApi.createRecord(args);
    dispatch({ type: CREATE_RECORD_SUCCESS, payload: record });
  } catch (e) {
    return dispatch({ type: CREATE_RECORD_ERROR, payload: e.message });
  }
  return await dispatch(fetchTodayRecords());
};


export const fetchTodayRecords = () => async dispatch => {
  dispatch({ type: FETCH_TODAY_RECORDS });
  const startUTC = moment().startOf('day').utc().format();
  const endUTC = moment().endOf('day').utc().format();
  try {
    const records = await recordApi.fetchTodayRecords({
      startUTC,
      endUTC,
    });
    dispatch({ type: FETCH_TODAY_RECORDS_SUCCESS, payload: records });
  } catch (e) {
    return dispatch({ type: FETCH_TODAY_RECORDS_ERROR, payload: e });
  }
};