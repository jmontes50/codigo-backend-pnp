import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import ProtectedRoute from "./components/ProtectedRoute";
import HomeView from "./views/HomeView";
import AnadirProductoView from "./views/AnadirProductoView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";
import PerfilView from "./views/PerfilView";

export default function routes(){
  return(
    <Fragment>
      <Route exact path="/" component={HomeView}/>
      <Route exact path="/register" component={RegisterView}/>
      <Route exact path="/login" component={LoginView}/>
      <ProtectedRoute exact path="/anadir" component={AnadirProductoView}/>
      <ProtectedRoute exact path="/perfil" component={PerfilView} />
    </Fragment>
  )
}