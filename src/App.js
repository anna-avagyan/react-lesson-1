import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';

class App extends React.Component {
  render() {
    return <div >
      <Header />
      <Main />
      <Footer/>


    </div >
  }
}

export default App;
