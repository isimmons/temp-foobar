import { useEffect } from "react";
import { fetchPokemon } from "./utils";
import PokemonInfoFallback from "./PokemonInfoFallback";
import PokemonDataView from "./PokemonDataView";
import useAsync from "./hooks/useAsync";

type PokemonInfoProps = {
  pokemonName: string;
};

export default function PokemonInfo({ pokemonName }: PokemonInfoProps) {
  const {
    data: pokemon,
    status,
    error,
    run,
  } = useAsync({
    status: pokemonName ? "pending" : "idle",
  });

  useEffect(() => {
    console.log("Fetching: ", pokemonName);
    if (!pokemonName) {
      return;
    }
    run(fetchPokemon(pokemonName));
  }, [pokemonName, run]);

  if (status === "idle") {
    return "Submit a pokemon";
  } else if (status === "pending") {
    return <PokemonInfoFallback name={pokemonName} />;
  } else if (status === "rejected") {
    throw error;
  } else if (status === "resolved" && pokemon) {
    return <PokemonDataView pokemon={pokemon} />;
  }

  throw new Error("This should be impossible");
}
