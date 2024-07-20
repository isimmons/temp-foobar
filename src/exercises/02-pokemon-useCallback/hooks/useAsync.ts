import { Dispatch, useCallback, useReducer } from "react";
import useSafeDispatch from "./useSafeDispatch";
import {
  asyncReducer,
  PokemonActionKind,
  type PokemonState,
} from "../reducers/asyncReducer";
import { PokemonType } from "../types";

export default function useAsync(initialState?: PokemonState) {
  const [state, unsafeDispatch] = useReducer(asyncReducer, {
    status: "idle",
    data: null,
    error: null,
    ...initialState,
  });

  const dispatch = useSafeDispatch(unsafeDispatch as Dispatch<unknown>);

  const { data, error, status } = state;

  const run = useCallback(
    (promise: Promise<PokemonType>) => {
      dispatch({ type: PokemonActionKind.PENDING });
      promise.then(
        (data: PokemonType) => {
          dispatch({ type: PokemonActionKind.RESOLVED, data });
        },
        (error: Error) => {
          dispatch({ type: PokemonActionKind.REJECTED, error });
        }
      );
    },
    [dispatch]
  );

  return {
    error,
    status,
    data,
    run,
  };
}
