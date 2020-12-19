import React, { useState, useEffect } from "react";
import HomeView from "./views/HomeView";
import AnadirProductoView from "./views/AnadirProductoView";
export default function App() {
  return (
    <div className="row">
      <div class="col-8">
        <HomeView />
      </div>
      <div class="col-4">
        <AnadirProductoView />
      </div>
    </div>
  );
}
