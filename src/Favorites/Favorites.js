import React, { Component } from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Favorite from './Favorite'
import './favorites.css'

class Favorites extends Component {
  state = {
    inputValue: '',
    favorites: ['⛷ skiing', '🚵‍♂️ mountain biking', '💻‍ coding'],
    // favorites: [],
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value,
    })
  }

  createFavorite = e => {
    e.preventDefault()
    this.setState(
      {
        favorites: [...this.state.favorites, this.state.inputValue],
      },
      () => {
        this.setState({ inputValue: '' })
      }
    )
  }

  deleteFavorite = item => {
    const remaining = this.state.favorites.filter(fav => fav !== item)
    this.setState({ favorites: remaining })
  }

  render() {
    return (
      <Wrapper>
        <form onSubmit={this.createFavorite}>
          <Input
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </form>
        <TransitionGroup component="ul">
          {this.state.favorites.map(favorite => (
            <CSSTransition timeout={500} classNames="fade" key={favorite}>
              <Favorite
                favorite={favorite}
                handleDelete={this.deleteFavorite}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Wrapper>
    )
  }
}

export default Favorites

const Wrapper = styled.div`
  margin-top: 30px;
`

const Input = styled.input`
  width: 100%;
  font-size: 19px;
  background-color: #ccc;
  padding: 20px;
  border: none;
  border-radius: 10px;
`
