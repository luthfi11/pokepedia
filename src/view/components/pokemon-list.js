import React from 'react'
import lodash from 'lodash'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/pokemon-list.css'

const PokemonList = ({ pokemons }) => {
  const navigate = useNavigate()

  const goToDetail = (pokemon) => {
    const { name, dreamworld } = pokemon
    navigate(`/detail/${name}`, { state: { image: dreamworld } })
  }

  return (
    <div className="grid">
      {pokemons.map((data) => (
        <button onClick={() => goToDetail(data)} className="card" key={`${data.id}`}>
          <div>
            <img className="card-img" src={data?.dreamworld} alt={data?.name} />
          </div>
          <div className="card-body">
            <p className="card-title">{lodash.capitalize(data?.name)}</p>
          </div>
        </button>
      ))}
    </div>
  )
}

export default PokemonList
