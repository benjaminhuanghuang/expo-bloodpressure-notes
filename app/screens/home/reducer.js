import {
  CREATE_RECORD,
  CREATE_RECORD_ERROR,
  CREATE_RECORD_SUCCESS,
} from './actions';

const INITIAL_STATE = {
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
    default:
      return state;
  }
};