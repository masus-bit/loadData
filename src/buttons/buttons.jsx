import React from 'react'
import {connect} from 'react-redux'
import { ActionCreator } from '../reducer/action-creator'
import { Operations } from '../reducer/operations'
const Buttons=(props)=>{
    const {onClickBtn,onLoading}=props
    return(
        <div className="btn-wrapper">
            <button className="big" onClick={(e)=>{
                
                onClickBtn(e.target.textContent)
                onLoading(true)
                }}>big</button>
            <button className="small" onClick={(e)=>{
                
                onClickBtn(e.target.textContent)
                onLoading(true)
                }}>small</button>
        </div>
    )
}
const mapDispatchTopProps=(dispatch)=>{
    return{
        onClickBtn:(size)=>dispatch(Operations.load(size)),
        onLoading:(bool)=>dispatch(ActionCreator.loading(bool))
    }
}

export default connect(null,mapDispatchTopProps)(Buttons)