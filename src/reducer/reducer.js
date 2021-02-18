import { actionType } from "./action-creator.js";
const InitialState = {
  data: [],
  loading: null,
  dataSize:null,
  sortedData:[],

};
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.LOAD_STORE:
      return Object.assign({}, state, {
        data: action.payload,
      });
    case actionType.LOADING:
      return Object.assign({}, state, {
        loading: action.payload,
      });
    case actionType.DATA_SIZE:
      return Object.assign({}, state, {
        dataSize:action.payload,
      })
    case actionType.SORT:
      return Object.assign({},state,{
        sortedData:action.payload,
      })
    case actionType.CLEAR:
      return Object.assign({}, state, {
        sortedData:action.payload
      })
  }
  return state;
};
