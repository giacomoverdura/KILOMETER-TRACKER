import React from "react";
import Header from './components/header';
import MapView from "./components/mapView";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <MapView />
      </div>
    </>
  )
  
}

export default App
