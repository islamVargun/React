import { useRef, useState } from "react";

function App() {
  const divRef = useRef(null);
  const colors = [
    "lightblue",
    "lightgreen",
    "lightcoral",
    "lightgoldenrodyellow",
    "lightpink",
  ];
  const [colorIndex, setColorIndex] = useState(0);

  const changeColor = () => {
    const nextColorIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextColorIndex);
    divRef.current.style.backgroundColor = colors[nextColorIndex];
  };

  return (
    <div>
      <div
        ref={divRef}
        style={{
          height: "350px",
          width: "350px",
          backgroundColor: colors[colorIndex],
        }}
      ></div>
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
}

export default App;
