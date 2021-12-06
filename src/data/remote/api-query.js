import { gql } from 'apollo-boost'

const APIQuery = {
  getPokemonList(count) { 
    return gql`
      query getAllPokemon {
        pokemons(limit: ${count}) {
          id
          name
          image
        }
      }`
  },

  getPokemonDetail(name) {
    return gql`
      query getPokemonDetail {
        pokemon(name: "${name}") {
          id
          name
          moves {
            move {
              name
            }
          }
          types {
            type {
              name
            }
          }
          weight
          height
        }
      }`
  }
}

export default APIQuery
