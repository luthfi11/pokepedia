import React from 'react'
import PokemonList from '../components/pokemon-list'
import { useQuery } from '@apollo/react-hooks'
import APIQuery from '../../data/remote/api-query'
import Navbar from '../components/navbar'
import Loading from '../components/loading'

const Home = () => {
  const { loading, error, data } = useQuery(APIQuery.getPokemonList(50))

  if (loading) return <Loading />
  if (error) return <p>Failed to fetch data</p>

  return (
    <div className="container">
      <Navbar title={'Pokepedia'} />
      <p className="page-title">{'Popular Pokemon'}</p>
      <PokemonList pokemons={data?.pokemons?.results} />
    </div>
  )
}

export default Home
