import React, { useState, useEffect } from 'react'
import PokemonList from '../components/pokemon-list'
import Navbar from '../components/navbar'
import { useIndexedDB } from 'react-indexed-db'
import { TOAST_CONFIG } from '../../util/toast'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import empty from '../../img/empty.png'
import '../../styles/saved.css'

const SavedPokemon = () => {
  const { getAll, deleteRecord } = useIndexedDB('pokemon')
  const [pokemons, setPokemons] = useState([])
 
  useEffect(() => {
    getPokemonList()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getPokemonList = () => {
    getAll().then(data => {
      setPokemons(data)
    })
  }

  const removePokemon = (id) => {
    deleteRecord(id)
      .then(() => {
        toast.success('Pokemon has been released.', TOAST_CONFIG)
        getPokemonList()
      })
  }

  const renderEmptyComponent = () => {
    return (
      <div className="empty-container">
        <img src={empty} alt={'Empty box'} className="empty-icon" />
        <p className="empty-text">{'No pokemon caught yet'}</p>
      </div>
    )
  }

  return (
    <div className="container">
      <Navbar title={'My Pokemon'} showBackButton />
      <p className="page-title">{'Saved Pokemon'}</p>
      {pokemons?.length > 0
        ? <PokemonList pokemons={pokemons || []} isSaved removeAction={(id) => removePokemon(id)}/>
        : renderEmptyComponent()
      }
      <ToastContainer />
    </div>
  )
}

export default SavedPokemon
