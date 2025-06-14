import { useState } from "react";
function useToggle() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return {
    open,
    toggle,
  };
}

export default useToggle;
