import React, { Component } from 'react';
import Nav from './components/Nav'
import Promo from './components/Promo'
/*
* В этом файле делается верстка
* */
class App extends Component {
  render () {
    return (
      <div>
	      <header className="header">
          <Nav />
          <Promo />
	      </header>
	      <main>
	      </main>
      </div>
    )
  }
}

export default App;
