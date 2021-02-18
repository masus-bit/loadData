import React from 'react'
import {connect} from 'react-redux'
import { ActionCreator } from '../reducer/action-creator'
import { Operations } from '../reducer/operations'
const Buttons=(props)=>{
    const {onClickBtn,onLoading, clear}=props
    return(
        <div className="btn-wrapper">
            <button className="big" onClick={(e)=>{
                clear()
                onClickBtn(e.target.textContent)
                onLoading(true)
                }}>big</button>
            <button className="small" onClick={(e)=>{
                clear()
                onClickBtn(e.target.textContent)
                onLoading(true)
                }}>small</button>
        </div>
    )
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onClickBtn:(size)=>dispatch(Operations.load(size)),
        onLoading:(bool)=>dispatch(ActionCreator.loading(bool)),
        clear:()=>dispatch(ActionCreator.clearSorted())
    }
}

export default connect(null,mapDispatchToProps)(Buttons)