import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
    	<div id="footer">
    		<div id="footerText">
    			<p>
    			Phasellus elementum quam sit amet arcu imperdiet, at molestie nisi efficitur. Donec ex nunc, eleifend at urna quis, pellentesque finibus neque. 
    			</p>
    			<p>
    			Proin dapibus leo nisl, eu lacinia dui maximus sed. Vestibulum molestie vulputate nisi tempus posuere. Quisque vel lacus rhoncus, malesuada velit ut, mollis orci. 
    			</p>
    		</div>
    		<nav id="footerNav">
    			<ul>
    				<li><a href="">HOME</a></li>
    				<li><a href="">SERVICE</a></li>
    				<li><a href="">WORKS</a></li>
    				<li><a href="">ABOUT ME</a></li>
    				<li><a href="">CONTACT</a></li>
    			</ul>
    		</nav>
    		<div id="copyright">
    		<p>&copy;<b>DEMO</b><span>SITE All rights reserved</span></p>
    		</div>
    	</div>
    	);
  }
}

export default Footer;
