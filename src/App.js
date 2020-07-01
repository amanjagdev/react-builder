import React from 'react';
import { RecoilRoot } from 'recoil';

//dev
import RecoilLogger from 'recoil-logger'

//Compoenents
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

const App = () => {
  return (
    <div className="App">
      <RecoilRoot>
        <RecoilLogger />
        <Header />
        <Home />
        <Footer />

      </RecoilRoot>
    </div>
  )
}

export default App;
