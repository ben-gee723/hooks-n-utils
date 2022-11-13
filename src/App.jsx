import { useState } from 'react';
import './styles/App.css';

import { useDate } from './hooks/utils'

function App() {
  console.log(useDate())
  return (
    <div className="App">
     {/* {useDate()} */}
    </div>
  )
}

export default App
