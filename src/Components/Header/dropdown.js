import React, {Component} from 'react';

class Dropdown extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    this.state={
      showSecondary: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);

    this.showSecondary = this.showSecondary.bind(this);
    this.closeSecondary = this.closeSecondary.bind(this);
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
    showSecondary(event) {
      event.preventDefault();
      this.setState({ showSecondary: true }, () => {
          document.addEventListener('click', this.closeSecondary);
       });
    }
  
    closeSecondary(event) {
      if (!this.dropdownMenu2.contains(event.target)) {
          this.setState({ showSecondary: false }, () => {
            document.removeEventListener('click', this.closeSecondary);
        });  
      }
    }
render() {
    return (
      <div>
        <button className="dropdown" onClick={this.showMenu}>
 					<div id="bar"/ >
           			<div id="bar"/>
          			<div id="bar"/>
        </button>
        
        {
          this.state.showMenu
            ? (
              <div
                className="dropdownMenu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
>
						<li><a href="">HOME</a></li>
						<li><a href="">SERVICE</a></li>
						<li><a href="" className="dropdownHeader" onClick={this.showSecondary}>WORKS</a></li>
            {
                  this.state.showSecondary
                  ? (
                  <div
                    className="dropdownMenuHeader"
                    ref={(element) => {
                    this.dropdownMenu2 = element;
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
						<li><a href="">ABOUT</a></li>
						<li><a href="">CONTACT</a></li>
					</div>
				) : (
				null
				)}
			</div>
			);
	}
}
export default Dropdown;