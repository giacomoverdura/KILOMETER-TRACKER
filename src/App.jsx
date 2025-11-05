import React from "react";
import Header from './components/header';
import Home from "./components/home";
import MapView from "./components/mapView";

function App() {
  return (
    <>
    <div className="header">
      <Header />
    </div>
    <div className="container">
      <Home />
    </div>
    {/* <MapView /> */}
    </>
  )
  
}

export default App
