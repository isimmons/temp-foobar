type SpecialAttack = {
  name: string;
  type: string;
  damage: number | string;
};

export type PokemonType = {
  id: string;
  number: string;
  name: string;
  image: string;
  attacks: {
    special: Array<SpecialAttack>;
  };
  fetchedAt: string;
};
