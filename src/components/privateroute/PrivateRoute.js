import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./Auth";

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/Login" />
      }
    />
  );
}

export default PrivateRoute;

//Ce décorateur sera utilisé par tout chemin devant être derrière l'authentification.
//Assez simple, créons un nouveau fichier dans le répertoire appelé `src`PrivateRoute.js.
