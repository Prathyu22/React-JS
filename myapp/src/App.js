import { useState, useEffect } from 'react'
import Calculator from './components/Calculator';

import Navbar from './layouts/Navbar'
import Info from './components/Info';
import Timer from './components/Timer';
import Tap from './components/Tap'



const App = () => { 

  const [currentComp, setcurrentComp] = useState('info')
  return (
    <div className="App">
      <Navbar setcurrentComp = {setcurrentComp} /> 
      {/* In curly braces, we cannot use another block of code instead we can use expressions. So, we used ternary operator here instead of "if-else" statements.*/}
      {
        currentComp === 'calculator' ? <Calculator /> :
        currentComp === 'timer' ? <Timer /> :
        currentComp === 'tap' ? <Tap /> :
        <Info />
      }
      { /*<Info />
      <Timer />
      <Calculator />
      <Tap /> */}
    </div >
  );
}



export default App;