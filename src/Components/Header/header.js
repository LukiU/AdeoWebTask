import React, { Component } from 'react';
import Dropdown from './dropdown.js';

class Header extends Component {
    constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
   }
  
    showMenu(event) {
      event.preventDefault();
      this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
       });
    }
  
    closeMenu(event) {
    
      if (!this.dropdownMenu.contains(event.target)) {
          this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });  
      
    }
  }
  render() {
    return (
      <div id="header">
          <div id="headerMenuTop">
              <ul>
                  <li><a href="">MENU</a></li>
                  <li> | </li>
                  <li><a href="">SOME TEXT</a></li>
                  <li> | </li>
                  <li><a href="">ANOTHER ITEM</a></li>
                  <li> | </li>
                  <li><a href="">ONE MORE</a></li>
                  <li> | </li>
                  <li><a href="">AND LAST ONE</a></li>
              </ul>
          </div>

          <div id="logo">
                <b>DEMO</b><span>SITE</span>
          </div>
          <Dropdown />
          <nav>
              <ul>
                  <li><a href="">HOME</a></li>
                  <li><a href="">SERVICE</a></li>
                  <li><a href="" className="dropdownHeader" onClick={this.showMenu}>WORKS</a></li>
                  {
                  this.state.showMenu
                  ? (
                  <div
                    className="dropdownMenuHeader"
                    ref={(element) => {
                    this.dropdownMenu = element;
                    }}
                   >
                   <div className="rect"></div>
                    <li id="drop"><a href="">ALL</a></li>
                    <li id="drop"><a href="">GRAPHIC</a></li>
                    <li id="drop"><a href="">DESIGN</a></li>
                    <li id="drop"><a href="">LOGO</a></li>
                    <li id="drop"><a href="">WEBSITE</a></li>
          </div>
        ) : (
        null
        )}
                  <li><a href="">ABOUT ME</a></li>
                  <li><a href="">CONTACT</a></li>
              </ul>
          </nav>
    </div>
      );
  }
}

export default Header;
