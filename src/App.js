import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import Favorites from './Favorites/Favorites'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Menu />
        <Favorites />
      </Wrapper>
    )
  }
}

export default App

const Wrapper = styled.div`
  position: relative;
  max-width: 800px;
  width: 90%;
  margin: 30px auto;
`
