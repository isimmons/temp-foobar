import { PokemonType } from "../types";

export type PokemonState = {
  status: "pending" | "idle" | "resolved" | "rejected";
  data?: PokemonType | null;
  error?: Error | null;
};

export enum PokemonActionKind {
  PENDING = "PENDING",
  RESOLVED = "RESOLVED",
  REJECTED = "REJECTED",
}

export type PokemonAction = {
  type: PokemonActionKind;
  data: PokemonType | null;
  error: Error | null;
};

export function asyncReducer(
  /*unused*/ state: PokemonState,
  action: PokemonAction
): PokemonState {
  switch (action.type) {
    case PokemonActionKind.PENDING: {
      return { ...state, status: "pending", data: null, error: null };
    }
    case PokemonActionKind.RESOLVED: {
      return { ...state, status: "resolved", data: action.data, error: null };
    }
    case PokemonActionKind.REJECTED: {
      return { ...state, status: "rejected", data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}
