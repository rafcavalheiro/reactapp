import './styles.css'

import { Card } from '../../components/Card'

 export function Home() {   

  return (
    
    <div className="container">

      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome..."/>
      <button type="button"> Adicionar </button>

      <Card name = "Rafael Cavalheiro" time="16:41:25"/>
      <Card name = "João Vitor Moraes" time="16:43:25"/>
      <Card name = "Bruce João" time="16:45:25"/>
      
    </div>
    
  )
}

