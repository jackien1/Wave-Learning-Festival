import React, { useEffect, useState } from 'react'
import { StatsContainer, StatsCard, CardContainer } from './styles'
import { Colors } from '@/styles'
import Cards from './assets/Cards.png'
import Ferris from './assets/Ferris.png'
import Grad from './assets/Grad.png'
import Amplify, { API, graphqlOperation } from 'aws-amplify'
import { Auth } from 'aws-amplify'
import { listStudents } from '../../../../graphql/queries'

const StatsCards = () => {
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    }).then(async (user) => {
      const id = user.username;
      const currentUsers = await API.graphql(graphqlOperation(listStudents, {
        filter: {
          id: {
            eq: id
          }
        }
      }));
      const currentUser = currentUsers.data.listStudents.items[0];
      setFirstName(currentUser.first_name);
    })
  }, [])

  return (
    <StatsContainer>
      <h1>Great Job, {firstName}!</h1>
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
