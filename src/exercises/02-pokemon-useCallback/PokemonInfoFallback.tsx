import { useRef } from 'react';
import PokemonDataView from './PokemonDataView';

type PokemonInfoFallbackProps = {
  name: string;
};

export default function PokemonInfoFallback({
  name,
}: PokemonInfoFallbackProps) {
  const initialName = useRef(name).current;
  const fallbackPokemonData = {
    name: initialName,
    number: 'XXX',
    image: '/img/pokemon/fallback-pokemon.jpg',
    attacks: {
      special: [
        { name: 'Loading Attack 1', type: 'Type', damage: 'XX' },
        { name: 'Loading Attack 2', type: 'Type', damage: 'XX' },
      ],
    },
    fetchedAt: 'loading...',
  };
  return <PokemonDataView pokemon={fallbackPokemonData} />;
}
