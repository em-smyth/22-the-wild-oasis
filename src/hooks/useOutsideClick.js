import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCaptuing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, listenCaptuing);

      return () =>
        document.removeEventListener("click", handleClick, listenCaptuing);
    },
    [handler, listenCaptuing]
  );

  return ref;
}
