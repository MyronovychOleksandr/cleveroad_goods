import React, { Component } from "react";
import { connect } from "react-redux";
import authActions from "../redux/auth/authActions";
import s from "./Alert.module.css";

class Alert extends Component {
  componentDidMount() {
    if (this.props.auth) {
      setTimeout(this.props.onClear, 2000);
    }
  }
  render() {
    return (
      <div className={s.box}>
        <h4>Warning!</h4>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onClear: authActions.clearError,
};

export default connect(null, mapDispatchToProps)(Alert);
