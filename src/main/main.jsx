import React, { useState } from "react";
import { connect } from "react-redux";
import { Item } from "../item/item.jsx";

const Main = (props) => {
  const { data } = props;
  return (
      
    <div className="board">
        
      <div className="add">
        <button className="add-btn">Добавить</button>
      </div>

      <ul className="list">
        <li className="item h">
          <div className="id col">ID</div>
          <div className="f-name col">first name</div>
          <div className="l-name col">last name</div>
          <div className="email col">e-mail</div>
          <div className="phone col">phone</div>
        </li>
        
        {data.length < 1
          ? null
          : data.map((it, i) => {
              return <Item item={it} key={i} />;
            })}
      </ul>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    data: state.data,
  });
};
export default connect(mapStateToProps)(Main);
