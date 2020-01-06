import React from 'react'
import { connect } from 'react-redux'
import { buyCake } from '../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes: {props.numOfCakes}</h2> 
            <button onClick={props.buyCake}>Buy Cake</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)