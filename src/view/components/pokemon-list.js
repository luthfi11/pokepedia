import React from 'react'
import lodash from 'lodash'
import { useNavigate } from 'react-router-dom'
import '../../styles/pokemon-list.css'
import remove from '../../img/remove.png'

const PokemonList = ({ pokemons, isSaved, removeAction }) => {
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
            <div className="row-item">
              <img className="flat-img" src={data?.image} alt={data?.name} />
              <p className="card-title">{data?.nickName}</p>
            </div>
            <button className="remove-button" onClick={() => removeAction(data.id)}>
              <img src={remove} alt={'Remove button'} className="remove-icon"/>
            </button>
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
              {data.owned
                ? <b>{`${data.owned} owned`}</b>
                : <i className="muted-text">{'Not owned yet'}</i>
              }
            </div>
          </button>
        ))}
      </div>
    )
  }
}

export default PokemonList
