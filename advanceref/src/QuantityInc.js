import React, { Component } from 'react'

export default class QuantityInc extends Component {

    
    constructor(props) {
        super(props)
        this.quantityRef = React.createRef()
    }

    IncrementQuantity = () => {
       this.quantityRef.current.value++
    }
    DecrementQuantity = () => {
        this.quantityRef.current.value--
    }

    render() {
        alert("hello")
        return (
            <div>
                <button style={{backgroundColor:"red"}}onClick={this.DecrementQuantity} >-</button> 
                <input type="text" ref={this.quantityRef}/>
               <button style={{backgroundColor:"green"}}onClick={this.IncrementQuantity} >+</button> 
            </div>
        )
    }
}

