import { combineReducers } from 'redux';
import * as types from '../actions/index';

function trips(state = [], action) {
  switch (action.type) {
    case types.CREATE_TRIP:
      return Object.assign({}, state, {
        // State to update
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  trips
});

export default rootReducer;
