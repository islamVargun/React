import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./Counter";

function App() {
  const [sayi, setSayi] = useState(0);

  useEffect(() => {
    console.log("sayi degisti");
  }, []);

  const arttir = () => setSayi(sayi + 1);
  const azalt = () => setSayi(sayi - 1);
  const arttir2 = () => setSayi(sayi + 2);
  const azalt2 = () => setSayi(sayi - 2);

  const hotels = ["Hilton", "Marriot", "Sheraton", "Holiday Inn", "Radisson"];

  return (
    <>
      <h1>sayac: {sayi}</h1>

      <button onClick={arttir} style={{ height: "50px", width: "100px" }}>
        Arttir
      </button>
      <button onClick={azalt} style={{ height: "50px", width: "100px" }}>
        Azalt
      </button>
      <button onClick={arttir2} style={{ height: "50px", width: "100px" }}>
        2 Arttir
      </button>
      <button onClick={azalt2} style={{ height: "50px", width: "100px" }}>
        2 Azalt
      </button>
      <Counter value={sayi * 2} />
      {/*-------------------------------------------------------------*/}
      {/* <div>
        <h1>hotel list</h1>
        <ul>
          {hotels.map((hotel, index) => (
            <li key={index}>{hotel}</li>
          ))}
        </ul>
      </div> */}

      {/*-------------------------------------------------------------*/}
    </>
  );
}

export default App;
