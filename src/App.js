import React, { Component } from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import Favorites from './Favorites/Favorites'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <h1>A couple of simple animations...</h1>

        <ul>
          <li>Using React Transition Group</li>
          <li>
            Inspired by{' '}
            <a href="https://egghead.io/courses/create-smooth-performant-transitions-with-react-transition-group-v2">
              this excellent Egghead.io course
            </a>
          </li>
          <li>Menu button with balloon open effect</li>
          <li>Favorites list with enter & exit transitions</li>
        </ul>

        <hr />

        <Animations>
          <Menu />
          <h2>My favorite things:</h2>
          <Favorites />
        </Animations>
      </Wrapper>
    )
  }
}

export default App

const Wrapper = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 30px auto;

  ul {
    font-size: 19px;
  }
`

const Animations = styled.div`
  position: relative;
  margin-top: 30px;

  h2 {
    margin: 30px 0 10px;
  }
`
