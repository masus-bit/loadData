import React, { Fragment } from "react";
import Main from "../main/main.jsx";
import Buttons from "../buttons/buttons.jsx";
import { connect } from "react-redux";
import { Progress } from "../progress/progress.jsx";
const App = (props) => {
  const { loading } = props;
  return (
    <div className="bg">
      {!loading ? null : <Progress />}
      <Buttons />
      <Main />
    </div>
  );
};
const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, state, {
    loading: state.loading,
  });
};
export default connect(mapStateToProps)(App);
