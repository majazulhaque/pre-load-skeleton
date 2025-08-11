import { useState, useEffect } from "react";

export function useLoadingState({ data, isFetching, minMs = 2000 }) {
  const [showSkeleton, setShowSkeleton] = useState(false);

  useEffect(() => {
    let timer = null;

    if (isFetching) {
      setShowSkeleton(true);
    } else {
      timer = setTimeout(() => setShowSkeleton(false), minMs);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isFetching, minMs]);

  const ready = !isFetching && data != null;
  return { showSkeleton, ready };
}
