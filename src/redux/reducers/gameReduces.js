import {mapLocalHostToIp} from '../../utils';
import {
  SET_LIST_GAME,
  SET_GAME_DETAIL,
  GET_LIST_GAME,
  REQUEST_LIST_GAME_SUCCESS,
  REQUEST_LIST_GAME_FAILED,
  REQUEST_GAME_DETAIL_SUCCESS,
  REQUEST_GAME_DETAIL_FAILED,
} from '../actions/gameAction';

const initialState = {listGame: [], game: {}};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case REQUEST_LIST_GAME_SUCCESS:
      return {...state, listGame: mapLocalHostToIp(payload)};
    case REQUEST_GAME_DETAIL_SUCCESS:
      return {...state, game: mapLocalHostToIp(payload)};
    case REQUEST_LIST_GAME_FAILED:
      return {...state, listGame: []};
    case SET_GAME_DETAIL:
      return {...state, game: payload};
    default:
      return state;
  }
};
