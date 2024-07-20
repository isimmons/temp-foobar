import { ErrorBoundary } from "react-error-boundary";
import { useState } from "react";
import ErrorFallback from "./ErrorFallback";
import PokemonInfo from "./PokemonInfo";
import PokemonForm from "./PokemonForm";

type ErrorBoundayResetHanlderArgs = {
  reason: "imperative-api" | "keys";
  args?: any[];
  prev?: any[];
  next?: any[];
};

function PokeMon() {
  const [pokemonName, setPokemonName] = useState("");

  function handleSubmit(newPokemonName: string) {
    setPokemonName(newPokemonName);
  }

  function handleReset(args: ErrorBoundayResetHanlderArgs) {
    console.log(args);
    if (args.reason === "keys" && args.next) setPokemonName(args.next[0]);
    else setPokemonName("");
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={(details) => handleReset(details)}
          resetKeys={[pokemonName]}
        >
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  );
}

function AppWithUnmountCheckbox() {
  const [mountApp, setMountApp] = useState(true);
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={mountApp}
          onChange={(e) => setMountApp(e.target.checked)}
        />{" "}
        Mount Component
      </label>
      <hr />
      {mountApp ? <PokeMon /> : null}
    </div>
  );
}

export default AppWithUnmountCheckbox;
