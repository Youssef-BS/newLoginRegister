import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, isLoggedIn, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          <Component />
        ) : (
          <Navigate to={{ pathname: "/", state: { from: location } }} />
        )
      }
    />
  );
};

export default ProtectedRoute;