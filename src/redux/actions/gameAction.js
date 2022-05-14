export const REQUEST_LIST_GAME_SUCCESS = 'REQUEST_LIST_GAME_SUCCESS';
export const REQUEST_LIST_GAME_FAILED = 'REQUEST_LIST_GAME_FAILED';
export const REQUEST_GAME_DETAIL_SUCCESS = 'REQUEST_GAME_DETAIL_SUCCESS';
export const REQUEST_GAME_DETAIL_FAILED = 'REQUEST_GAME_DETAIL_FAILED';

// export const GET_LIST_GAME = 'GET_LIST_GAME';
// export const SET_GAME_DETAIL = 'SET_GAME_DETAIL';

// export const getListGame = () => {
//   return async dispatch => {
//     //call API
//     try {
//       //success =>save response to store
//       const response = await axios({
//         method: 'GET',
//         url: 'http://10.0.2.2:3000/games',
//       });
//       dispatch(setListGame(mapLocalHostToIp(response.data)));
//     } catch (error) {
//       //failed => log error

//       console.log(error);
//     }
//   };
// };

// export const getListGame = () => {
//   return async dispatch => {
//     //call Api
//     try {
//       //success  => save response to store
//       const response = await axios({
//         method: 'GET',
//         url: 'http://10.0.2.2:3000/games',
//       });
//       dispatch(setListGame(mapLocalHostToIp(response.data)));
//     } catch (error) {
//       // failed => log error
//       console.log(error);
//     }
//   };
// };

// export const getListGame1 = () => {
//   return async () => {
//     try {
//       //success => save responve to store
//       const responve = await axios({
//         method: 'GET',
//         url: 'http://10.0.2.2:3000/games',
//       });
//       dispatch(setListGame(mapLocalHostToIp(response.data)));
//     } catch (error) {
//       //failed => log error
//       console.log(error);
//     }
//   };
// };
export function requestListGameSuccess(payload) {
  return {
    type: REQUEST_LIST_GAME_SUCCESS,
    payload,
  };
}
// export function setGameDetail(payload) {
//   return {
//     type: SET_GAME_DETAIL,
//     payload,
//   };
// }

export function requestGameDetailSuccess(payload) {
  return {
    type: REQUEST_GAME_DETAIL_SUCCESS,
    payload,
  };
}
// export function setGameDetail(payload) {
//   return {
//     type: SET_GAME_DETAIL,
//     payload,
//   };
// }
