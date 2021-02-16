export const actionType = {
    LOAD_STORE: "LOAD_STORE",
    LOADING:"LOADING"
  };
  
  export const ActionCreator = {
    loadToStore: (data) => {
      return {
        type: actionType.LOAD_STORE,
        payload: data,
      };
    },
    loading:(bool)=>{
        return{
            type:actionType.LOADING,
            payload: bool
        }
    }
}