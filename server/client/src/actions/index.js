import axios from 'axios';

import { FETCH_USER } from './types';

const fetchUser = async () => {
  // usual action if using vanilla redux
  // const request = await axios.get('/api/current_user', async (req, res) => {
  //   return {
  //     type: FETCH_USER,
  //     payload: request,
  //   };
  // });

  // if using redux-thunk
  return function (dispatch) {
    return axios
      .get('/api/current_user')
      .then((res) => dispatch({ type: FETCH_USER, payload: res }));
  };
};

exports = {
  fetchUser,
};
