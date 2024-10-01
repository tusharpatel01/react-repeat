import { useState } from 'react'
import './App.css'

function App() {
  const [Bgcolor, setBgColor] = useState("#212121");
  const changeBackgroundColor = (color) => {
    setBgColor(color);
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: Bgcolor,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Background Color Changer</h1>

     <div>
      <button onClick={()=>changeBackgroundColor("#ff6666")}
        style={{backgroundColor:"#ff6666",padding:"10px",margin:"10px"}}>
        red
      </button>

      <button onClick={()=>changeBackgroundColor("#66ff66")}
        style={{backgroundColor:"#66ff66",padding:"10px",margin:"10px"}}>
        green
      </button>

      <button onClick={()=>changeBackgroundColor("#6666ff")}
        style={{backgroundColor:"#6666ff",padding:"10px",margin:"10px"}}>
        blue
      </button>

      <button onClick={()=>changeBackgroundColor("#ffffff")}
        style={{backgroundColor:"#ffffff",padding:"10px",margin:"10px"}}>
        white
      </button>

      <button onClick={()=>changeBackgroundColor("#212121")}
        style={{backgroundColor:"#212171",padding:"10px",margin:"10px"}}>
        reset
      </button>
     </div>
     
    </div>
  );
}

export default App;
