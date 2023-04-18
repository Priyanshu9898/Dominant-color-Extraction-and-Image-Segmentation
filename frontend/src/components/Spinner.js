import { Container } from '@chakra-ui/react'
import React from 'react';
import spinner from "../assets/gg.gif";

const Spinner = () => {
  return (
    <Container size={"container.sm"} display={"flex"} alignItems={"center"} justifyContent="center">
        <img src={spinner} alt="Spinner"/>
    </Container>
  )
}

export default Spinner;