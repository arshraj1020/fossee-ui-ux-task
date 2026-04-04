import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import WorkshopCard from "./components/WorkshopCard";

function App() {
  return (
    <div>
      <Navbar />

      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "32px",
          fontWeight: "bold",
        }}
      >
        Explore Workshops
      </h1>

      <div className="workshop-container">
        <WorkshopCard title="Python Workshop" />
        <WorkshopCard title="AI Workshop" />
        <WorkshopCard title="Web Development" />
      </div>
    </div>
  );
}

export default App;