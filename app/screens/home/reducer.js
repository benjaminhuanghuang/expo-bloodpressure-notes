import {
  CREATE_RECORD,
  CREATE_RECORD_ERROR,
  CREATE_RECORD_SUCCESS,
  FETCH_TODAY_RECORDS,
  FETCH_TODAY_RECORDS_SUCCESS,
  FETCH_TODAY_RECORDS_ERROR
} from './actions';

const INITIAL_STATE = {
  todayRecords: [],
  error: {
    on: false,
    message: null,
  },
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_RECORD:
      return {
        ...INITIAL_STATE,
        isLoading: true,
      };
    case CREATE_RECORD_SUCCESS:
      return {
        ...INITIAL_STATE,
        isLoading: false,
      };
    case CREATE_RECORD_ERROR:
      return {
        error: {
          on: true,
          message: 'Error happen!',
        },
        isLoading: false,
      };
    case FETCH_TODAY_RECORDS:
      return {
        ...INITIAL_STATE,
        isLoading: true,
      };;
    case FETCH_TODAY_RECORDS_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        error: {
          on: false,
          message: null,
        },
      };
    case FETCH_TODAY_RECORDS_ERROR:
      return {
        data: [],
        isLoading: false,
        error: {
          on: true,
          message: 'Error when fetching my meetups',
        },
      };
    default:
      return state;
  }
};