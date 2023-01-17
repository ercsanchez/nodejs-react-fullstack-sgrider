import axios from 'axios';

import { FETCH_USER } from './types';

export const fetchUser = () => async (dispatch) => {
  // action if using redux-thunk
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

// usual action if using vanilla redux
// const request = await axios.get('/api/current_user', async (req, res) => {
//   return {
//     type: FETCH_USER,
//     payload: request,
//   };
// });
