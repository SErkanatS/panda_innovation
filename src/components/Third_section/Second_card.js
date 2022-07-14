import React from 'react';
import {CardBody, CardSections, CardImg, CardDescription, CardLogo, CardComponents} from './Third_section.elements'

function Second_card(props) {
  return (
    <CardBody>
        <CardSections>
            <CardLogo src={props.logo}/>
            <CardDescription>{props.description}</CardDescription>
            <CardComponents>{props.comp}</CardComponents>
        </CardSections>
        <CardSections>
            <CardImg src={props.img}/>
        </CardSections>
    </CardBody>
  )
}

export default Second_card;