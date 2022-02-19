
import {useState, useEffect} from 'react';
const Content = () => {
    const [counter,setCounter] = useState(0)
    const [content,setContent] = useState([])
    
    const APICall = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/photos')
        const data = await res.json()
        setContent(data)
    }

    useEffect( () => {
        APICall()
    }, [counter]) //Everytime we click on CLICK ME, we just make one APICall... This makes memory management... We can also have empty array here so that we can have only one APICall.
    return (
        <div>
             <h2>{counter}</h2>
            <button onClick= { () => {setCounter(previousValue => previousValue + 1)}} >CLICK ME </button> 
            <ul>
                {content.map(item => <li style={{margin: "10px", border: "3px solid violet"}} >{item.title}</li>)}
            </ul>
        </div>);
}

export default Content;  
