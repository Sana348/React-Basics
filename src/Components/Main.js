import React, { Component } from "react";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Single from "./Single";
class Main extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>
          <Link to="/"> Photowall </Link>
        </h1>
        <Routes>
        <Route
          exact
          path="/"
          element={<PhotoWall/>}
        />
        
        <Route
          path="/AddPhoto"
          element={AddPhoto}
        />
        <Route
          path="/single/:id"
          element={Single}
        />
        </Routes>
      </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default (connect(mapStateToProps, mapDispatchToProps)(Main));


