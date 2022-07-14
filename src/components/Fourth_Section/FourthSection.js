import React from 'react'
import {Background, Header, HeartImg} from './FourthSection.elements'
import Heart from '../../images/heart.svg'

function FourthSection() {
  return (
    <Background>
         <Header>
         Для нас <b>важно</b> то, <br /> что мы делаем,<br /> поэтому все<br /> делаеся с любовью
         </Header>
         <HeartImg src={Heart}/>
    </Background>
  )
}

export default FourthSection;