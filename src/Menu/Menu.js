import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import cx from 'classnames'
import './menu.css'

class Menu extends Component {
  state = {
    showMenu: false,
    highlightedMenuItem: false,
  }

  handleMenuClick = () => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  toggleHighlightedMenuItem = () => {
    this.setState(state => ({
      highlightedMenuItem: !state.highlightedMenuItem,
    }))
  }

  render() {
    return (
      <div>
        <button
          className={cx('toggler', {
            'toggler--active': this.state.showMenu,
          })}
          type="button"
          onClick={this.handleMenuClick}
        >
          Menu
        </button>
        <CSSTransition
          in={this.state.showMenu}
          timeout={350}
          classNames="balloon"
          unmountOnExit
          onEntered={this.toggleHighlightedMenuItem}
          onExit={this.toggleHighlightedMenuItem}
        >
          <div className="menu">
            <ul className="list">
              <li className="list-item">Home</li>
              <li
                className={cx('list-item', {
                  'list-item--active': this.state.highlightedMenuItem,
                })}
              >
                Profile
              </li>
              <li className="list-item">Favorites</li>
              <li className="list-item">Sign out</li>
            </ul>
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default Menu
