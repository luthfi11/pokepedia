import React from 'react'
import lodash from 'lodash'
import { useNavigate } from 'react-router-dom'
import '../../styles/pokemon-list.css'

const PokemonList = ({ pokemons, isSaved }) => {
  const navigate = useNavigate()

  const goToDetail = (pokemon) => {
    const { name, dreamworld } = pokemon
    navigate(`/detail/${name}`, { state: { image: dreamworld } })
  }

  if (isSaved) {
    return (
      <div className="flat-list">
        {pokemons.map((data) => (
          <div className="list-container" key={`${data.id}`}>
            <img className="flat-img" src={data?.image} alt={data?.name} />
            <p className="card-title">{lodash.capitalize(data?.nickName)}</p>
          </div>
        ))}
      </div>
    )
  } else {
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
}

export default PokemonList
