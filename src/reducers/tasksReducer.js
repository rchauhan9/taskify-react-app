import _ from 'lodash';

import {
  GET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK
} from '../actions/types'

export default (state = {}, action) => {
  switch(action.type) {
    case GET_TASKS:
      return { ...state, ..._.mapKeys(action.payload, 'id')}
    case CREATE_TASK:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TASK:
      return _.omit(state, action.payload);
    case EDIT_TASK:
      return { ...state, [action.payload.id]: action.payload }
    default:
      return state;
  }
}
