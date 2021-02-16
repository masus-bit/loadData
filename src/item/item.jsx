import React from 'react'

export const Item=(props)=>{
    const{item}=props
    return(
        <li className="item h">
                  <div className="id col">{item.id}</div>
                  <div className="f-name col">{item.firstName}</div>
                  <div className="l-name col">{item.lastName}</div>
                  <div className="email col">{item.email}</div>
                  <div className="phone col">{item.phone}</div>
              </li>
    )
}