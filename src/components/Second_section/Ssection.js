import React from 'react'
import {SsectionContainer, SsectionHeader, SsectionButton} from './Ssection.elements'

function Ssection() {
  return (
    <SsectionContainer>
      <SsectionHeader>
         Записаться на бесплатную <br />консультацию можно прямо <b>сейчас</b>!
      </SsectionHeader>
      <SsectionButton href='/ssss'>
         Запись→
      </SsectionButton>
    </SsectionContainer>
  )
}

export default Ssection;