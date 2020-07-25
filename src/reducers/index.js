import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import tasksReducer from './tasksReducer';
import authReducer from './authReducer';

export default combineReducers({
  authReducer: authReducer,
  tasks: tasksReducer,
  form: formReducer
});
