import React, { Component } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Menu.css'

class Menu extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showMobileMenu: false
    }
  }

  render () {
    const { className, menuClassName, iconClassName, mMenuClassName } = this.props
    return (
      <div className={className || 'menu-wrapper'}>
        <div className='d-none d-md-block'>
          <div className='rwd-menu'>
            { this.props.children }
          </div>
        </div>
        <div className='d-md-none'>
          <div
            className='menu-anchor'
            onClick={() => this.setState({
              showMobileMenu: !this.state.showMobileMenu
            })}
          >
            Icon
          </div>
          {
            this.state.showMobileMenu && <div className='rwd-m-menu'>{ this.props.children }</div>
          }
        </div>
      </div>
    )
  }
}

export default Menu
