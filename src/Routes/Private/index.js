import React, { useState, useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthContext } from "../../Contexts/Auth";

export const PrivateRoute = ({ children, ...rest }) => {
  const { user, setUser } = useAuthContext();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const result = window.localStorage.getItem("library-token");
    setUser(result);
    setLoading(false);
  }, []);

  if (loading) return <div>carregando...</div>;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
