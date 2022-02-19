
import {useState} from 'react'
const Content = () => {
   
    const [items, setItems] = useState([])
    const [value, setValue] = useState('')

    const handleSubmit = () => {
        setItems(prev => [...prev,value]) 
    }

    const handleInput = (e) => {
        setValue(e.target.value)
    }

    return (
        <>
          <h2>ToDo</h2>
          <form>
            <input onChange={handleInput} type="text" />
            <button onClick={handleSubmit} type="submit">ADD</button>
          </form>
          <ul>
              {items.map(item => <li>{item}</li>)}
          </ul>
        </>
    );
}

export default Content;  
