import React, { Fragment, useState } from "react";
import {connect} from 'react-redux'
import { ActionCreator } from "../../reducer/action-creator";
import InputMask from "react-input-mask";
const Search = (props) => {
    const {setFocus, data,onSearch}=props
    
  return (
      <Fragment>
      <h2 className="search-title">SEARCH</h2>
    <div className="search">
        
      <input
        type="number"
        placeholder="id"
        required
        id="id"
        className="input id"
        pattern="^[0-9]+$"
        onChange={(e)=>{
            if(e.target.value.length>1){
                setFocus(true)
            }else{
                setFocus(false)
            }
            onSearch(e.target.value,data,e.target.id)}}
      />
      <input
        type="text"
        placeholder="firstName"
        required
        id="firstName"
        className="input firstNameInp"
        onChange={(e)=>{
            if(e.target.value.length>1){
                setFocus(true)
            }else{
                setFocus(false)
            }
            onSearch(e.target.value,data,e.target.id)}}
      />
      <input
        type="text"
        placeholder="lastName"
        required
        id="lastName"
        className="input lastNameInp"
        onChange={(e)=>{
            if(e.target.value.length>1){
                setFocus(true)
            }else{
                setFocus(false)
            }
            onSearch(e.target.value,data,e.target.id)}}
      />
      <input
        type="email"
        placeholder="email"
        required
        id="email"
        className="input emailInp"
        onChange={(e)=>{
            if(e.target.value.length>1){
                setFocus(true)
            }else{
                setFocus(false)
            }
            onSearch(e.target.value,data,e.target.id)}}
      />
      <InputMask
        placeholder="phone"
        required
        id="phone"
        mask="(999)999-9999"
        maskChar=" "
        className="phoneInp"
        onChange={(e)=>{
            if(e.target.value.length>1){
                setFocus(true)
            }else{
                setFocus(false)
            }
            onSearch(e.target.value,data,e.target.id)}}
      />
    </div>
    </Fragment>
  );
};
const mapStateToProps= (state, ownProps) => {
    return Object.assign({}, ownProps, {
      data: state.data,
    });
  };
const mapDispatchToProps= (dispatch) => {
    return {
    onSearch:(inputValue,contacts, field)=>dispatch(ActionCreator.search(inputValue,contacts, field))
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Search);