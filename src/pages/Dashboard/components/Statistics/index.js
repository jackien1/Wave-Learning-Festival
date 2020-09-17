import React from 'react'
import { StatsContainer, StatsCard, CardContainer } from './styles'
import { Colors } from '@/styles'
import Cards from './assets/Cards.png'
import Ferris from './assets/Ferris.png'
import Grad from './assets/Grad.png'

const StatsCards = () => {
  return (
    <StatsContainer>
      <h1>Great Job, Karly!</h1>
      <CardContainer>
        <StatsCard style={{ background: Colors.WLF_TURQOUISE }}>
          <h1>0</h1>
          <p>ACTIVE EVENTS</p>
          <img src={Cards}/>
        </StatsCard>
        <StatsCard style={{ background: Colors.WLF_ORANGE }}>
          <h1>0</h1>
          <p>EVENTS ADDED</p>
          <img src={Ferris}/>
        </StatsCard>
        <StatsCard style={{ background: Colors.WLF_YELLOW }}>
          <h1>0</h1>
          <p>HOURS THIS WEEK</p>
          <img src={Grad}/>
        </StatsCard>
      </CardContainer>
      <hr/>
    </StatsContainer>
  )
}

export default StatsCards
