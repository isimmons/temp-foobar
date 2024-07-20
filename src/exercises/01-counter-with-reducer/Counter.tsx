import { useReducer } from "react";
import countReducer, { CountActionKind } from "./countReducer";

type CounterProps = {
  initialCount?: number;
  step?: number;
};

function Counter({ initialCount = 0, step = 1 }: CounterProps) {
  const [state, dispatch] = useReducer(countReducer, {
    count: initialCount,
  });

  const increment = () =>
    dispatch({ type: CountActionKind.INCREMENT, payload: step });

  const decrement = () =>
    dispatch({ type: CountActionKind.DECREMENT, payload: step });

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: 10,
          maxHeight: 36,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 28,
        }}
      >
        <button onClick={increment}>I</button>
        <div>
          <p>{state.count}</p>
        </div>

        <button onClick={decrement}>D</button>
      </div>
    </>
  );
}

export default Counter;
