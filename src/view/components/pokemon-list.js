import React from 'react'
import lodash from 'lodash'

const PokemonList = ({ pokemons }) => {
  return (
    <div className="grid">
      {pokemons.map((data) => (
        <div className="card">
          <div>
            <img className="card-img" src={data.image} alt={data.name} />
          </div>
          <div className="card-body">
            <p className="card-title">{lodash.capitalize(data.name)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PokemonList
