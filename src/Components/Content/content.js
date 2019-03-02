import React, { Component } from 'react';

class Content extends Component {
  constructor(){
  	super();
  	this.state={
  		items:[],
  	}
  }
  componentDidMount(){
  	fetch('https://jsonplaceholder.typicode.com/posts')
  		.then (res => res.json())
  		.then (json => {
  		    this.setState({
                items: json,
            })
  	});
}

  render() {    

    const notRandomList = [];
     this.state.items.forEach(item=>{
        notRandomList.push(
            <li key = {item.id}>
                {item.title}
            </li>)
     });
    const listItems = [];

    for (var i = 0; i < 4; i++) {
        listItems[i] = notRandomList[Math.floor(Math.random() * notRandomList.length)];
        console.log(listItems);
    }



    return (
    	<div id="containerMain">
    		<div id="containerContentTop">
    			<div id="topBoxLeft">
    				<h1>WELCOME</h1>
    				<p>
    					In sagittis augue in facilisis convallis. Nunc molestie sapien justo, eu mattis nisi convallis et. Mauris vitae placerat ipsum. In nec diam tellus. Duis imperdiet urna sed odio hendrerit, laoreet. 
    				</p>
    				<button id="learnButton">LEARN MORE</button>
    			</div>
    			<div id="topBoxRight">
    			<div id="topBoxRightTop">
    			</div>
    			<div id="topBoxRightText">
    				<h2>UI/UX DESIGN</h2>
    				<p>Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
    				<p>Fusce placerat augue volutpat, vehicula massa vitae, convallis.</p>
    			</div>
    			</div>
    		</div>
    		<div id="containerContentMid">
    			<div id="midBoxLeft">
    			<h2>WEB DEVELOPMENT</h2>
    			<p>Sed laoreet risus eu dolor vestibulum, non bibendum urna cursus. Sed at tincidunt arcu. Nulla fermentum purus ut neque blandit tincidunt. Etiam orci. </p>
    			<p>Cras non nibh felis. Quisque in nulla magna. Nunc mattis tortor tortor, id fringilla metus ornare sed. Fusce a quam porttitor, rutrum diam. </p>
    			</div>
    			<div id="midBoxRight">
    			<h2>WIREFRAME</h2>
    			<p id="wireframeText">Nulla auctor, diam vitae ullamcorper mollis, elit sapien molestie</p>
    			<div id="midListBox">
    				<div id="listBoxLeft">
    					<h3>Custom List</h3>
    					<p>Some Heading</p>
    					<ul id = "listRandom">{listItems}</ul>
    				</div>
    				<div id="listBoxRight">
    					<h3>Web Development</h3>
    					<p>Quisque semper, odio ac tempor pellentesque, lectus mi iaculis risus, ut scelerisque lectus purus in. </p>
    				</div>
    			</div>
    			</div>
    		</div>
    		<div id="containerContentBot">
    			<div id="botBoxLeft">
    				<h1>CONTACT</h1>
    				<div id="rectangleBlack"/>
    				<p>Mauris rutrum sapien ut erat venenatis condimentum sed a diam. Vivamus eget porttitor nisl. Nunc vestibulum, tortor sed dapibus euismod, leo nisi posuere tellus, at commodo diam odio tempor orci. Vestibulum elit mauris, tincidunt eget nunc a, euismod rutrum purus. Vestibulum ac libero et dolor condimentum varius vel in urna.</p>
    				<p>Donec turpis est, tincidunt et sollicitudin vitae, pharetra non lorem. Curabitur eu auctor mi, nec tempor diam. Phasellus id efficitur metus, nec vulputate mauris. Vivamus metus nisi, rutrum elementum ante quis, rhoncus porta ligula. Donec varius nulla elit, sed placerat neque accumsan a. Ut lorem augue, pellentesque a aliquam et, interdum sit amet sapien.</p>
    				<p>Aenean mattis sem augue. Donec lacinia turpis vitae elit feugiat, ac dignissim est rhoncus. Sed nec facilisis ligula. Aliquam erat volutpat. Vestibulum non fringilla est, id consequat eros. Pellentesque cursus ultrices enim eget maximus.</p>
    			</div>
    			<div id="botBoxRight">
    				<form id="contactForm">
    					<div><label for="Name">NAME</label></div>
    					<input type="text" name="Name"/>
    					<div><label for="email">EMAIL</label></div>
    					<input type="email" name="email" placeholder="email@email.com"/>
    					<div><label for="subject">MESSAGE</label></div>
    					<textarea id="message" name="message"/>
    					<div><input id="submit" type="submit" value="SEND"/></div>
    				</form>
    			</div>
    		</div>
    	</div>
    	);
  }
}

export default Content;
