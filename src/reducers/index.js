import { combineReducers } from "redux";
import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
} from "../actiontypes";
const initialState = {
  counter: 1,
};
export function counterApp(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        counter: state.counter + 1,
      };
    case DECREMENT_COUNTER:
      return {
        counter: state.counter - 1,
      };
    case RESET_COUNTER:
      return {
        counter: initialState.counter,
      };
    default:
      return state;
  }
}
const rootReducer = combineReducers({ counterApp });
export default rootReducer;
