import ChildOne from "./components/ChildOne";
import {useState} from 'react'

const App = () => { 

  const [data, setdata] = useState([{ name: "Mercedes"}, { name: 'Zenevo'}])

      return (
        <div className="App">
          <h1>I'm The parent</h1>
          <ChildOne data={data} />
        </div>
      );
}



export default App;