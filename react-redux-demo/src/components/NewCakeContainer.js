import React, { useState } from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1)

    return (
        <div>
            <h2>Number of Cakes: {props.numOfCakes}</h2>  
            <input type="text" value={number} onChange={e => setNumber(e.target.value)}/>
            <button onClick={() => props.buyCake(number)}>Buy {number} Cakes </button>
        </div>
    )
}

// Takes the redux state as a param
const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    }
}

// Takes the redux dispatch method as a param
const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewCakeContainer)