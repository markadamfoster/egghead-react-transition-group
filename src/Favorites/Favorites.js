import React, { Component } from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Favorite from './Favorite'
import './favorites.css'

class Favorites extends Component {
  state = {
    inputValue: '',
    favorites: ['💻‍ coding', '🚵‍♂️ mountain biking', '⛷ skiing'],
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
        favorites: [this.state.inputValue, ...this.state.favorites],
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
          <input
            placeholder="Add favorite..."
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
        </form>
        <List component="ul">
          {this.state.favorites.map(favorite => (
            <CSSTransition timeout={500} classNames="fade" key={favorite}>
              <Favorite
                favorite={favorite}
                handleDelete={this.deleteFavorite}
              />
            </CSSTransition>
          ))}
        </List>
      </Wrapper>
    )
  }
}

export default Favorites

const Wrapper = styled.div`
  input {
    box-sizing: border-box;
    width: 100%;
    font-size: 19px;
    background-color: #efefef;
    padding: 20px;
    border: none;
    border-radius: 10px;
  }
`

const List = styled(TransitionGroup)`
  padding: 0;
`
