import React from "react";
import "./App.css";
import WorkshopCard from "./components/WorkshopCard";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Workshops</h1>

      <div className="workshop-container">
        <WorkshopCard title="Python Workshop" />
        <WorkshopCard title="AI Workshop" />
        <WorkshopCard title="Web Development" />
      </div>
    </div>
  );
}

export default App;