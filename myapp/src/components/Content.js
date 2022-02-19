import ListItem from './ListItem'
import {useState} from 'react'
import {render} from "react-dom";
const Content = () => {
   //Let counter = 0
    let [counter,setCounter] = useState(0)
    //console.log(counter)
    //console.log(mysteryFunction)
    console.log("rerender")
    return (
        <div className="container">
             <h2>{counter}</h2>
            <button onClick= { () => {
                //console.log('BUTTON CLICKED')
                //counter = counter + 1
                setCounter(previousValue => previousValue + 1)
            }} >CLICK ME </button> 
        </div>
    );
}

export default Content;  

/*import React from "react";

class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    render() {
        return (
            <div className="container">
            {/*
            <h2>{counter}</h2>
            <button onClick= { () => {
                console.log('BUTTON CLICKED')
                counter = counter + 1
            }} >CLICK ME </button>
            */
            /*Lorem ipsum dolor sit amet 
            </div>
        )
    }
}

export default Content;*/