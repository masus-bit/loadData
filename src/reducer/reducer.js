import { actionType } from "./action-creator.js";
const InitialState = {
  data: [],
  searchData:[],
  loading: null,
  dataSize: null,
  sortedData: [],
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
        dataSize: action.payload,
      });
    case actionType.SORT:
      return Object.assign({}, state, {
        sortedData: action.payload,
      });
    case actionType.CLEAR:
      return Object.assign({}, state, {
        sortedData: action.payload,
      });
    case actionType.SAVE:
      return Object.assign({}, state, {
        data: new Array(action.payload).concat(state.data),
        sortedData: new Array(action.payload).concat(state.sortedData),
      });
      case actionType.SEARCH:
        return Object.assign({},state,{
          searchData:action.payload,
        })
  }
  return state;
};
