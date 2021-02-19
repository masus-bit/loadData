import React, { Fragment, useRef, useState } from "react";
import { connect } from "react-redux";
import { Item } from "../item/item.jsx";
import { Pages } from "../pagination/pagination.jsx";
import { ActionCreator } from "../reducer/action-creator.js";
import { options, getData, sortData } from "../utils.js";
import InputMask from "react-input-mask";

const Main = (props) => {
  const [sortOrder, setOrder] = useState(1);
  const [page, setPage] = useState(1);
  const form = useRef(null);
  const saveBtn = useRef(null);
  const { data, dataSize, onSortClick, sortedData, onSaveClick } = props;

  return (
    <Fragment>
      <div className="board">
        <div className="add">
          <form
            action=""
            ref={form}
            id="add"
            className="add-form hidden"
            onChange={(e) => {
              if (
                form.current.querySelector(".id").value.length > 1 &&
                form.current.querySelector(".firstNameInp").value.length > 3 &&
                form.current.querySelector(".lastNameInp").value.length > 3 &&
                form.current.querySelector(".emailInp").value.length > 3 &&
                form.current.querySelector(".phoneInp").value.length > 15
              ) {
                saveBtn.current.disabled = false;
              } else {
                saveBtn.current.disabled = true;
              }
            }}
            onSubmit={(e) => {
              e.preventDefault();
              const id=form.current.querySelector(".id").value;
              const firstName=form.current.querySelector(".firstNameInp").value;
              const lastName=form.current.querySelector(".lastNameInp").value;
              const email=form.current.querySelector(".emailInp").value;
              const phone=form.current.querySelector(".phoneInp").value;
              
              onSaveClick(id,firstName,lastName,email,phone)
            }}
          >
            <input
              type="number"
              placeholder="id"
              required
              className="input id"
              pattern="^[0-9]+$"
            />
            <input
              type="text"
              placeholder="firstName"
              required
              className="input firstNameInp"
            />
            <input
              type="text"
              placeholder="lastName"
              required
              className="input lastNameInp"
            />
            <input
              type="email"
              placeholder="email"
              required
              className="input emailInp"
            />
            <InputMask
              placeholder="phone"
              required
              mask="(999)999-9999"
              maskChar=" "
              className="phoneInp"
            />
            <button
              className="save"
              ref={saveBtn}
              type="submit"
              disabled
              
            >
              Добавить в таблицу
            </button>
          </form>
          <button
            type="button"
            className="add-btn"
            onClick={() => {
              form.current.classList.remove("hidden");
            }}
          >
            Добавить
          </button>
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
            <div
              className="l-name col"
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
              lastName
            </div>
            <div
              className="email col"
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
              email
            </div>
            <div
              className="phone col"
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
              phone
            </div>
          </li>

          {sortedData.length < 2
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
    onSaveClick: (id, firstName, lastName, email, phone) =>
      dispatch(ActionCreator.save(id, firstName, lastName, email, phone)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
