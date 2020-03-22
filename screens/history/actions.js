import moment from 'moment';
import { BPRecordApi } from '../../api';

const recordApi = new BPRecordApi();


export const FETCH_RECORDS = 'FETCH_RECORDS';
export const FETCH_RECORDS_SUCCESS = 'FETCH_RECORDS_SUCCESS';
export const FETCH_RECORDS_ERROR = 'FETCH_RECORDS_ERROR';

export const FETCH_CHART_DATA = 'FETCH_CHART_DATA';
export const FETCH_CHART_DATA_SUCCESS = 'FETCH_CHART_DATA_SUCCESS';
export const FETCH_CHART_DATA_ERROR = 'FETCH_CHART_DATA_ERROR';


export const fetchRecords = (startUTC, endUTC, userId) => async dispatch => {
  dispatch({ type: FETCH_RECORDS });
  try {
    const records = await recordApi.fetchRecords({
      startUTC,
      endUTC,
      userId,
    });
    dispatch({ type: FETCH_RECORDS_SUCCESS, payload: records });
  } catch (e) {
    return dispatch({ type: FETCH_RECORDS_ERROR, payload: e });
  }
};

export const fetchChartData = (startUTC, endUTC, userId) => async dispatch => {
  dispatch({ type: FETCH_CHART_DATA });
  try {
    const records = await recordApi.fetchChartData({
      startUTC,
      endUTC,
      userId,
    });
    dispatch({ type: FETCH_CHART_DATA_SUCCESS, payload: records });
  } catch (e) {
    return dispatch({ type: FETCH_CHART_DATA_ERROR, payload: e });
  }
};