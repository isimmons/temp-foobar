export enum CountActionKind {
  INCREMENT = "INCREMENT",
  DECREMENT = "DECREMENT",
}

type CountAction = {
  type: CountActionKind;
  payload: number;
};

type CountState = {
  count: number;
};

export default function countReducer(state: CountState, action: CountAction) {
  const { type, payload: step } = action;

  switch (type) {
    case CountActionKind.INCREMENT: {
      return {
        ...state,
        count: state.count + step,
      };
    }
    case CountActionKind.DECREMENT: {
      return {
        ...state,
        count: state.count - step,
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`);
    }
  }
}
