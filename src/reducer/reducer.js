import { actionType } from "./action-creator.js";
const InitialState = {
  data: [],
loading:null,
};
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionType.LOAD_STORE:
      return Object.assign({}, state, {
        data: action.payload,
      });
    case actionType.LOADING:
        return Object.assign({},state,{
            loading:action.payload
        })
  }
  return state
};
