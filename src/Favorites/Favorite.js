import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class Favorite extends Component {
  static propTypes = {
    favorite: PropTypes.string,
    handleDelete: PropTypes.func,
  }

  handleDeleteClick = () => {
    this.props.handleDelete(this.props.favorite)
  }

  render() {
    return (
      <Wrapper>
        {this.props.favorite}
        <button type="button" onClick={this.handleDeleteClick}>
          <span role="img" aria-label="delete">
            ❌
          </span>
        </button>
      </Wrapper>
    )
  }
}

export default Favorite

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  button {
    text-align: center;
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 18px;
    border-radius: 4px;

    span {
      padding-left: 3px; // to center emoji in focus outline
    }

    &:focus {
      box-shadow: 0 0 0 1pt #f10000;
    }
  }
`
