import React from "react";
import Photo from "./Photo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//anchor tag, href attribute
function PhotoWall(props) {
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto">
        {" "}
      </Link>
      <div className="photoGrid">
        {props.posts
          .sort(function (x, y) {
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo key={index} post={post} {...props} index={index} />
          ))}
      </div>
    </div>
  );
}
PhotoWall.propTypes = {
  posts: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default (connect(mapStateToProps, mapDispatchToProps)(PhotoWall));



