import { useDispatch, useSelector } from "react-redux";
import "./App.css";

import { getCountry } from "./redux/features/country/countrySlice";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();

  // const { counter } = useSelector((state) => state.counter);
const {country}=useSelector((state)=>state.country.country)
  useEffect(() => {
    dispatch(getCountry());
  }, []);

  return (
    <>
      {/* <span
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </span>
      <span>{counter}</span>

      <span
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </span>
      */}
    </>
  );
}

export default App;
