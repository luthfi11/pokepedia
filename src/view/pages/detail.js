import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import APIQuery from '../../data/remote/api-query'
import Loading from '../components/loading'
import Navbar from '../components/navbar'
import lodash from 'lodash'
import '../../styles/detail.css'
import { useIndexedDB } from 'react-indexed-db'

const DetailPokemon = () => {
  const location = useLocation()
  const { name } = useParams()
  const { loading, error, data } = useQuery(APIQuery.getPokemonDetail(name))
  const { pokemon } = data || {}
  const { add } = useIndexedDB('pokemon')

  const catchPokemon = () => {
    const isSuccess = lodash.sample([true, false])
    if (isSuccess) {
      savePokemon(pokemon)
    } else {
      console.log('failed')
    }
  }

  const savePokemon = () => {
    const saveData = {
      nickName: pokemon?.name,
      image: location?.state?.image
    }
    add(saveData)
      .then(() => {
        console.log('success')
      })
      .catch((ex) => {
        console.log(ex)
      })
  }

  const setNumberColor = (stat) => {
    let style = 'stat-text '
    if (stat >= 40 && stat <= 60) {
      style += 'stat-yellow'
    } else if (stat >= 61 && stat <= 80) {
      style += 'stat-green'
    } else if (stat >= 81) {
      style += 'stat-blue'
    }
    return style
  }

  window.scrollTo(0, 0);

  if (loading) return <Loading />
  if (error) return <p>Failed to fetch data</p>

  return (
    <div className="container">
      <Navbar title={'Pokemon Detail'} showBackButton showSavedIcon />
      <div className="img-container">
        <img src={location?.state?.image} alt={pokemon?.name} className="img-detail" />
      </div>
      <div className="content">
        <h1 className="pokemon-name">{lodash.capitalize(pokemon?.name)}</h1>
        <div className="row-container">
          <p className="mini-info">Height : <b>{pokemon?.height / 10} m</b></p>
          <span className="separator">|</span>
          <p className="mini-info">Weight : <b>{pokemon?.weight / 10} kg</b></p>
        </div>

        <div>
          <b>{'Stats'}</b>
          <div className="stat-container">
            {pokemon?.stats?.map((item, index) => (
              <div className="row-container space-between bottom-border" key={`${index}`}>
                <p className="gray-text">{lodash.capitalize(item?.stat?.name)}</p>
                <b className={setNumberColor(item?.base_stat)}>{item?.base_stat}</b>
              </div>
            ))}
          </div>
        </div>

        <div>
          <b>{'Types'}</b>
          <ul className="bubble-list">
            {pokemon?.types?.map((item, index) => (
              <li className="bubble-item green-bg" key={`${index}`}>
                <p className="green-text">{lodash.capitalize(item?.type?.name)}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <b>{'Moves'}</b>
          <ul className="bubble-list">
            {pokemon?.moves?.map((item, index) => (
              <li className="bubble-item blue-bg" key={`${index}`}>
                <p className="blue-text">{lodash.capitalize(item?.move?.name)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="button-container">
        <button className="catch-button" onClick={catchPokemon}>{'Catch Now'}</button>
      </div>
    </div>
  )
}

export default DetailPokemon
