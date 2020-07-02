import React from 'react';
import { RecoilRoot } from 'recoil';

//dev
import RecoilLogger from 'recoil-logger'

//Compoenents
import Home from './components/Home'

const App = () => {
  return (
    <div className="App">
      <RecoilRoot>
        <RecoilLogger />
        <Home />
      </RecoilRoot>
    </div>
  )
}

export default App;
