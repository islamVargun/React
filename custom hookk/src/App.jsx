import useCounter from "./hook/useCounter";
import useToggle from "./hook/useToggle";
import useCopy from "./hook/useCopy";
function App() {
  const { count, increment, decrement } = useCounter();
  const { open, toggle } = useToggle();
  const [copied, copy] = useCopy("kopyaladim seni fak yu");
  return (
    <>
      <button onClick={increment}>arttir</button>
      {count}
      <button onClick={decrement}>azalt</button>
      <hr />
      <hr />
      {open && (
        <div
          style={{ width: "100px", height: "100px", backgroundColor: "orange" }}
        >
          kapat amk
        </div>
      )}
      <button onClick={toggle}>{open ? "gizle" : "goster"}</button>
      <hr />
      <hr />
      {copied ? <div>kopyalandi</div> : null}
      <button onClick={copy}>Copy</button>
    </>
  );
}

export default App;
