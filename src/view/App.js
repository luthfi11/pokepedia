import '../styles/App.css'
import Home from './pages/home'
import DetailPokemon from './pages/detail'
import NotFound from './pages/not-found'
import { Routes, Route } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import client from '../data/remote/api-client'

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/home" element={<Home />} exact />
        <Route path="/detail/:name" element={<DetailPokemon />} exact />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ApolloProvider>
  )
}

export default App
