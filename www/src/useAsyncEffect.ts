import { useEffect } from "react";

export function useAsyncEffect(asyncFunc: () => Promise<any>) {
  useEffect(() => {
    (async () => await asyncFunc())();
  }, []);
}
