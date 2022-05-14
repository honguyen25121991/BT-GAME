import axios from 'axios';
import {
  requestListGameSuccess,
  requestListGameFailed,
  requestGameDetailFailed,
  requestGameDetailSuccess,
} from '../actions/gameAction';

export const requestListGame = () => {
  return async dispatch => {
    //call Api
    try {
      //success  => save response to store
      const response = await axios({
        method: 'GET',
        url: 'http://10.0.2.2:3000/games',
      });
      dispatch(requestListGameSuccess(response.data));
    } catch (error) {
      // failed => log error
      console.log(error);
      dispatch(requestListGameFailed(error));
    }
  };
};

export const requestGameDetail = id => {
  return async dispatch => {
    //call Api
    try {
      //success  => save response to store
      const response = await axios({
        method: 'GET',
        url: `http://10.0.2.2:3000/games/${id}`,
      });
      dispatch(requestGameDetailSuccess(response.data));
    } catch (error) {
      // failed => log error
      console.log(error);
      dispatch(requestGameDetailFailed(error));
    }
  };
};
