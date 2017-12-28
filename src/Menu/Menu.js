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
    const { className } = this.props
    return (
      <div className={className}>
        <div className='d-none d-md-block'>
          { this.props.children }
        </div>
        <div className='d-md-none'>
          <div onClick={() => this.setState({ showMobileMenu: !this.state.showMobileMenu })}>Icon</div>
          {
            this.state.showMobileMenu && <div>{ this.props.children }</div>
          }
        </div>
      </div>
    )
  }
}

export default Menu
