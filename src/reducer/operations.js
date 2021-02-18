import { ActionCreator } from "./action-creator.js";
const URLS = {
  big: `/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`,
  small: `/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`,
};
export const Operations = {
  load: (size) => (dispatch, _getState, api) => {
    if (size == "big") {
      dispatch(ActionCreator.dataSize(size))
      api.get(URLS.big).then((response) => {
        dispatch(ActionCreator.loadToStore(response.data));
        dispatch(ActionCreator.loading(false))
      });
      
    } else {
      dispatch(ActionCreator.dataSize(size))
      api.get(URLS.small).then((response) => {
        dispatch(ActionCreator.loadToStore(response.data));
        dispatch(ActionCreator.loading(false))
      });
      
    }
  },
};
