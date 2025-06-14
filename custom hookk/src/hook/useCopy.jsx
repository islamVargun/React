import { useState } from "react";

function useCopy(text) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return [copied, copy];
}

export default useCopy;
