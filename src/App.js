import React, { Component } from 'react';
import logo from './logo.svg';
import './css/style_large.css';
import './css/style_1200.css';
import './css/style_1000.css';
import './css/style_800.css';
import './css/style_800.css';
import './css/style_800.css';
import './css/style_600.css';
import './css/style_400.css';
import Header from './Components/Header/header.js';
import Content from './Components/Content/content.js';
import Footer from './Components/Footer/footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
      </div>
    );
  }
}

export default App;
