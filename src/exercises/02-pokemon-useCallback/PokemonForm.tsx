import {
  useState,
  type ChangeEventHandler,
  type FormEventHandler,
} from "react";

type PokemonFormProps = {
  pokemonName: string;
  onSubmit: (pokemonName: string) => void;
};

export default function PokemonForm({
  pokemonName: externalPokemonName,
  onSubmit,
}: PokemonFormProps) {
  const [pokemonName, setPokemonName] = useState(externalPokemonName || "");

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setPokemonName(e.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(pokemonName);
  };

  const handleSelect = (newPokemonName: string) => {
    setPokemonName(newPokemonName);
    onSubmit(newPokemonName);
  };

  return (
    <form onSubmit={handleSubmit} className="pokemon-form">
      <label htmlFor="pokemonName-input">Pokemon Name</label>
      <small>
        Try{" "}
        <button
          className="invisible-button"
          type="button"
          onClick={() => handleSelect("pikachu")}
        >
          "pikachu"
        </button>
        {", "}
        <button
          className="invisible-button"
          type="button"
          onClick={() => handleSelect("charizard")}
        >
          "charizard"
        </button>
        {", or "}
        <button
          className="invisible-button"
          type="button"
          onClick={() => handleSelect("mew")}
        >
          "mew"
        </button>
      </small>
      <div>
        <input
          className="pokemonName-input"
          id="pokemonName-input"
          name="pokemonName"
          placeholder="Pokemon Name..."
          value={pokemonName}
          onChange={handleChange}
        />
        <button type="submit" disabled={!pokemonName.length}>
          Submit
        </button>
      </div>
    </form>
  );
}
