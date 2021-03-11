import { searchContact, sortData } from "../utils";

export const actionType = {
    LOAD_STORE: "LOAD_STORE",
    LOADING:"LOADING",
    DATA_SIZE:"DATA_SIZE",
    SORT:"SORT",
    CLEAR:"CLEAR",
    SAVE:"SAVE",
    SEARCH:"SEARCH",
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
    },
    dataSize:(size)=>{
      return{
        type: actionType.DATA_SIZE,
        payload:size
      }
    },
    sorting:(data,element,order)=>{
      return{
        type:actionType.SORT,
        payload:sortData(data,element,order)
      }
    },
    clearSorted:()=>{
      return{
        type:actionType.CLEAR,
        payload:[]
      }
    },
    save:(id,firstName,lastName,email,phone)=>{
      return{
        type:actionType.SAVE,
        payload:{id,firstName,lastName,email,phone}
      }
    },
    search:(inputValue, contacts, field)=>{
      return{
        type:actionType.SEARCH,
        payload:searchContact(inputValue,contacts,field)
      }
    }
}