
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Mission() {
    const navigate = useNavigate()
  return (
    <>
       <div>
         Mission
       </div>
       <button onClick={()=>navigate('/')}>Anasayfaya Dön</button>
    </> 
  )
}

export default Mission
