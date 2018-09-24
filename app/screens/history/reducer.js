import {
  FETCH_RECORDS,
  FETCH_RECORDS_SUCCESS,
  FETCH_RECORDS_ERROR,
  FETCH_CHART_DATA,
  FETCH_CHART_DATA_SUCCESS,
  FETCH_CHART_DATA_ERROR,
} from './actions';

const INITIAL_STATE = {
  bpRecords: [],
  bpChart:{},
  error: {
    on: false,
    message: null,
  },
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_RECORDS:
      return {
        ...INITIAL_STATE,
        isLoading: true,
      };;
    case FETCH_RECORDS_SUCCESS:
      return {
        bpRecords: action.payload,
        isLoading: false,
        error: {
          on: false,
          message: null,
        },
      };
    case FETCH_RECORDS_ERROR:
      return {
        bpRecords: [],
        isLoading: false,
        error: {
          on: true,
          message: 'Error when fetching records',
        },
      };
      case FETCH_CHART_DATA:
      return {
        ...INITIAL_STATE,
        isLoading: true,
      };;
    case FETCH_CHART_DATA_SUCCESS:
      return {
        bpChart: action.payload,
        isLoading: false,
        error: {
          on: false,
          message: null,
        },
      };
    case FETCH_CHART_DATA_SUCCESS:
      return {
        bpChart: [],
        isLoading: false,
        error: {
          on: true,
          message: 'Error when fetching records',
        },
      };
    default:
      return state;
  }
};