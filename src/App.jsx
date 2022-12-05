import { useState } from "react";
import spot from "./assets/spot.png";
import pickerOne from "./assets/picker1.png";
import pickerTwo from "./assets/picker2.png";
import pickerThree from "./assets/picker3.png";
import "./App.css";
import { Topbar } from "./Topbar";

function App() {
  const [src, setSrc] = useState();
  return (
    <div>
      <Topbar />
      {/* ============================ */}

      <main className="flex main-container main">
        <div className="intro">
          <h1>JUST DO IT</h1>
          <p>
            Innovated to withstand your toughest matches, this updated design
            puts flexible, durable materials exactly where they're needed most.
          </p>
        </div>

        <div className="flex spotlight">
          <p>NikeCourt Zoom Vapor Cage 4 Rafa</p>
          <div className="spot">
            <img src={spot} alt="react" />
          </div>
        </div>
      </main>
      <div className="flex container picker-plus">
        <button>SHOP NOW</button>
        <div className="flex picker">
          <div onClick={() => setSrc(pickerOne)}>
            <img src={pickerOne} alt="re" />
            <p>rafa-hard-court</p>
          </div>
          <div onClick={() => setSrc(pickerTwo)}>
            <img src={pickerTwo} alt="re" />
            <p>pro-hard-court</p>
          </div>
          <div onClick={() => setSrc(pickerThree)}>
            <img src={pickerThree} alt="re" />
            <p>Vapor Cage 4 Rafa</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
