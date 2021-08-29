import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { authOperations } from "../redux/auth";
import Alert from "../components/Alert";
import { Button, InputGroup, FormControl } from "react-bootstrap";

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

class Register extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onRegister({ ...this.state });
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <CSSTransition
          in={this.props.error}
          classNames="alert"
          timeout={500}
          unmountOnExit
        >
          <Alert
            auth={true}
            text={"This email already registred or password is incorrect"}
          />
        </CSSTransition>
        <h2>Register page</h2>
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

          <Button type="submit">Register</Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
});
const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
