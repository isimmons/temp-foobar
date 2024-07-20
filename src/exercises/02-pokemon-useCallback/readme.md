# HTTP requests and useEffect

HTTP requests are side effects.

## Graphql

The query to enter at
[graphql pokemon vercel app](https://graphql-pokemon2.vercel.app)

```text
 {
    pokemon(name: "pikachu") {
      id
      number
      name
      image
      attacks {
        special {
          name
          type
          damage
        }
      }
    }
  }
```

The data returned

```text
{
  "data": {
    "pokemon": {
      "id": "UG9rZW1vbjowMjU=",
      "number": "025",
      "name": "Pikachu",
      "image": "https://img.pokemondb.net/artwork/pikachu.jpg",
      "attacks": {
        "special": [
          {
            "name": "Discharge",
            "type": "Electric",
            "damage": 35
          },
          {
            "name": "Thunder",
            "type": "Electric",
            "damage": 100
          },
          {
            "name": "Thunderbolt",
            "type": "Electric",
            "damage": 55
          }
        ]
      }
    }
  }
}
```
