import { useEffect, useRef } from "react";

export function useOutsideClick(handler, capturingFase = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }

    document.addEventListener("click", handleClick, capturingFase);

    return () =>
      document.removeEventListener("click", handleClick, capturingFase);
  }, [handler, capturingFase]);

  return ref;
}
