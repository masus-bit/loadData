import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Item } from "../item/item.jsx";
import { Pages } from "../pagination/pagination.jsx";
import { ActionCreator } from "../reducer/action-creator.js";
import { options, getData, sortData } from "../utils.js";

const Main = (props) => {
  const [sortOrder, setOrder] = useState(1);
  const [page, setPage] = useState(1);
  const { data, dataSize, onSortClick, sortedData } = props;
  return (
    <Fragment>
      <div className="board">
        <div className="add">
          <button className="add-btn">Добавить</button>
        </div>

        <ul className="list">
          <li className="item h" style={{ margin: "20px 0" }}>
            <div
              className="id col"
              onClick={(e) => {
                switch (sortOrder) {
                  case 0:
                    setOrder(1);
                    break;
                  case 1:
                    setOrder(2);
                    break;
                  case 2:
                    setOrder(1);
                    break;
                }
                onSortClick(data, e.target.textContent, sortOrder);
              }}
            >
              id
            </div>
            <div
              className="f-name col"
              onClick={(e) => {
                switch (sortOrder) {
                  case 0:
                    setOrder(1);
                    break;
                  case 1:
                    setOrder(2);
                    break;
                  case 2:
                    setOrder(1);
                    break;
                }
                onSortClick(data, e.target.textContent, sortOrder);
              }}
            >
              firstName
            </div>
            <div className="l-name col">lastName</div>
            <div className="email col">email</div>
            <div className="phone col">phone</div>
          </li>

          {sortedData.length < 1
            ? data.length < 1
              ? null
              : getData(dataSize, data, page).map((it, i) => {
                  return <Item item={it} key={i} />;
                })
            : getData(dataSize, sortedData, page).map((it, i) => {
                return <Item item={it} key={i} />;
              })}
        </ul>
      </div>

      {data.length < 1 ? null : data.length > options.itemsInPage ? (
        <Pages
          data={!sortOrder == "empty" ? sortedData : data}
          options={options}
          setPage={setPage}
        />
      ) : null}
    </Fragment>
  );
};
const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ownProps, {
    data: state.data,
    dataSize: state.dataSize,
    sortedData: state.sortedData,
  });
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSortClick: (data, element, order) =>
      dispatch(ActionCreator.sorting(data, element, order)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
