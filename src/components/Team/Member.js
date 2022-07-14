import React from 'react'
import {MemberContainer, MemberAvatar, Name, JobTitle} from './Team.components'

function Member(props) {
  return (
    <MemberContainer>
      <MemberAvatar src={props.img} alt="Avatar"/>
      <Name>{props.name}</Name>
      <JobTitle>{props.job}</JobTitle>
    </MemberContainer>
  )
}

export default Member;