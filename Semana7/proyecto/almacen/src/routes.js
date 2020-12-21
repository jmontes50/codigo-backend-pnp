import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import HomeView from "./views/HomeView";
import AnadirProductoView from "./views/AnadirProductoView";
import RegisterView from "./views/RegisterView";
import LoginView from "./views/LoginView";

export default function routes(){
  return(
    <Fragment>
      <Route exact path="/" component={HomeView}/>
      <Route exact path="/register" component={RegisterView}/>
      <Route exact path="/anadir" component={AnadirProductoView}/>
      <Route exact path="/login" component={LoginView}/>
    </Fragment>
  )
}