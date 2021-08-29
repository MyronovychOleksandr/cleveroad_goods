import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { authOperations } from "../redux/auth";
import Alert from "../components/Alert";

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    padding: 4,
  },
};

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin({ ...this.state });
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <CSSTransition
          in={this.props.error}
          classNames="alert"
          timeout={500}
          unmountOnExit
        >
          <Alert auth={true} text={"Your data is incorrect"} />
        </CSSTransition>
        <h2>Login page</h2>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Email
            <InputGroup size="sm" className="mb-3">
              <FormControl
                type="email"
                value={email}
                name="email"
                required
                placeholder="Email"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={this.handleChange}
              />
            </InputGroup>
          </label>
          <label style={styles.label}>
            Password
            <InputGroup size="sm" className="mb-3">
              <FormControl
                type="password"
                value={password}
                name="password"
                required
                placeholder="Password"
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                onChange={this.handleChange}
              />
            </InputGroup>
          </label>
          <Button type="submit">Log in</Button>
        </form>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

export default connect(mapStateToProps, { onLogin: authOperations.login })(
  Login
);
