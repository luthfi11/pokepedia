import React, { useState, useEffect } from 'react'
import PokemonList from '../components/pokemon-list'
import { useQuery } from '@apollo/react-hooks'
import APIQuery from '../../data/remote/api-query'
import Navbar from '../components/navbar'
import Loading from '../components/loading'
import { useIndexedDB } from 'react-indexed-db'

const Home = () => {
  const { loading, error, data } = useQuery(APIQuery.getPokemonList(50))
  const { getAll } = useIndexedDB('pokemon')
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getAll().then(saved => {
      if (data?.pokemons?.results) {
        const pokemonData = [...data?.pokemons?.results]
        saved?.forEach((item) => {
          pokemonData?.find((pokemon, index) => {
            if (item?.pokemonId === pokemon?.id) {
              pokemonData[index] = {
                ...pokemonData[index],
                owned: (pokemonData[index]?.owned || 0) + 1
              }
              return true
            }
            return false
          })
        })
        setPokemons(pokemonData)
      }
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.pokemons?.results])

  if (loading) return <Loading />
  if (error) return <p>Failed to fetch data</p>

  return (
    <div className="container">
      <Navbar title={'Pokepedia'} showSavedIcon />
      <p className="page-title">{'Popular Pokemon'}</p>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}

export default Home
