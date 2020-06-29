import React from 'react';
import { RecoilRoot } from 'recoil'

//Compoenents
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

const App = () => {
  return (
    <div className="App">
      <RecoilRoot>

        <Header />
        <Home />
        <Footer />

      </RecoilRoot>
    </div>
  )
}

export default App;
