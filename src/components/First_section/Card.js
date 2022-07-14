import React from 'react';
import { CardBody, CardImg, CardName, CardDescription } from './Fsection.elements';

function Card(props) {
  return (
   <CardBody>
      <CardImg src={props.img} alt="img" />
      <CardName>{props.name}</CardName>
      <CardDescription>{props.description}</CardDescription>
   </CardBody>
  )
}

export default Card