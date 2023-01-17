import { FETCH_USER } from '../actions/types';

const authReducer = (state = null, action) => {
  // default state is null if api request (action creator) is still in process or something went wrong during auth
  // console.log(action);
  switch (action.type) {
    case FETCH_USER:
      return action.payload || false; // convert empty strings (empty response.data of api call) into false value
    default:
      return state;
  }
};

export default authReducer;
