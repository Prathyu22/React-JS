import {useEffect, useState} from "react";

const Tap = () => {

    useEffect( () => {
        console.log("component mounted")
        /*const alert = () => window.alert("HEY!! You just double clicked")
        document.addEventListener('dbclick',alert)
        return () => document.removeEventListener('dbclick',alert)*/
        
        return () => console.log('component unmounted')

    }, [])
    
    const [count, setcount] = useState(0)

    return (
        <div className="container">
            <div className="tap">
                <h3>{count}</h3>
                <button onClick={() => {setcount(prev => prev += 1) }} >CLICK </button>
                <h2>Tap</h2>
            </div>
        </div>
    );
}

export default Tap;