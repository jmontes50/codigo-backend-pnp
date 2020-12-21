import React, { useState, useEffect } from "react";
import HomeView from "./views/HomeView";
import AnadirProductoView from "./views/AnadirProductoView";
import RegisterView from "./views/RegisterView";

export default function App() {
  return (
    <div className="container">
      {/* <div className="row">
        <div class="col-8">
          <HomeView />
        </div>
        <div className="col-4">
          <AnadirProductoView />
        </div>
      </div> */}
      <RegisterView/>
    </div>
  );
}
