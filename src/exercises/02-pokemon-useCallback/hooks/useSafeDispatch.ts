import { Dispatch, useCallback, useEffect, useRef } from "react";

export default function useSafeDispatch(dispatch: Dispatch<unknown>) {
  const mountedRef = useRef(false);

  // to make this even more generic you should use the useLayoutEffect hook to
  // make sure that you are correctly setting the mountedRef.current immediately
  // after React updates the DOM. Even though this effect does not interact
  // with the dom another side effect inside a useLayoutEffect which does
  // interact with the dom may depend on the value being set

  // TODO: look at that ^ crap later. Spent way too long trying to figure this all out
  // with Typescript. Not even sure it is working yet.

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  return useCallback(
    (...args: unknown[]) => (mountedRef.current ? dispatch(args[0]) : void 0),
    [dispatch]
  );
}
