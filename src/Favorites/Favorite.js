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
        <Delete onClick={this.handleDeleteClick}>
          <span role="img" aria-label="delete">
            ❌
          </span>
        </Delete>
      </Wrapper>
    )
  }
}

export default Favorite

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  height: 30px;
`

const Delete = styled.div`
  margin-right: 8px;
`
