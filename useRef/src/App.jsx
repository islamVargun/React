import { useRef } from "react";
import Timer from "./Timer";
import Colorchange from "./Colorchange";
function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focuslan Inputa</button>
      <Timer />
      <Colorchange/>
    </div>
  );
}

export default FocusInput;
