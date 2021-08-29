import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import { connect } from "react-redux";
// import { authOperations } from "../redux/auth";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import routes from "../routes";
import Layout from "./Layout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  // componentDidMount() {
  //   this.props.onGetCurrentUser();
  // }
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Switch>
              {routes.map((route) =>
                route.private ? (
                  <PrivateRoute key={route.label} {...route} />
                ) : (
                  <PublicRoute
                    key={route.label}
                    {...route}
                    restricted={route.restricted}
                  />
                )
              )}
            </Switch>
          </Suspense>
        </Layout>
      </BrowserRouter>
    );
  }
}

// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser,
// };

// export default connect(null, mapDispatchToProps)(App);
export default App;
