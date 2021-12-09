import React from 'react'
import '../../styles/loading.css'
import failed from '../../img/failed.png'
import '../../styles/failed.css'

const Failed = () => (
  <div className="failed-container">
    <img src={failed} alt={'Failed'} className="failed-icon" />
    <p>{'Failed to fetch data :('}</p>
  </div>
)

export default Failed
