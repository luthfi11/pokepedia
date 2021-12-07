import { gql } from '@apollo/client'

const APIQuery = {
  getPokemonList(count) { 
    return gql`
      query getAllPokemon {
        pokemons(limit: ${count}) {
          results {
            id
            name
            dreamworld
          }
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
          stats {
            base_stat
            stat {
              name
            }
          }
        }
      }`
  }
}

export default APIQuery
