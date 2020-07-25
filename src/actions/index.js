import tasks from '../apis/tasks';
import {
  SIGN_IN,
  SIGN_OUT,
  GET_TASKS,
  CREATE_TASK,
  DELETE_TASK,
  EDIT_TASK
} from './types';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};


export const getTasks = (username) => async (dispatch) => {
  const response = await tasks.get('/tasks', {
    params: {
      'username': username
    }
  })
  dispatch({ type: GET_TASKS, payload: response.data })
}

export const createTask = (formValues) => async (dispatch) => {
  const response = await tasks.post('/tasks', formValues)
  dispatch({ type: CREATE_TASK, payload: response.data })
}

export const deleteTask = (id, username) => async (dispatch) => {
  await tasks.delete('/tasks', {
    data: {
      'id': id,
      'username': username
    }
  })
  dispatch({ type: DELETE_TASK, payload: id});
}

export const editTask = (newValues) => async (dispatch) => {
  const response = await tasks.patch('/tasks', {...newValues})
  dispatch({ type: EDIT_TASK, payload: response.data})
}
