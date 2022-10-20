import Main from "./Main";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";
//import { withRouter } from "react-router-dom";
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
const App = (connect(mapStateToProps, mapDispatchToProps)(Main));
export default App;