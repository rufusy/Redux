const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

const initial_cake_state = {
    num_of_cakes: 10,
}

const initial_ice_cream_state = {
    num_of_ice_creams: 20
}

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM,
        info: 'Second redux action'
    }
}

const cake_reducer = (state = initial_cake_state, action) => {
    switch(action.type){
       case BUY_CAKE: return {
           ...state,
           num_of_cakes: state.num_of_cakes - 1 
       } 
      
       default: return state
    }
}
const ice_cream_reducer = (state = initial_ice_cream_state, action) => {
    switch(action.type){
       case BUY_ICECREAM: return {
            ...state,
            num_of_ice_creams: state.num_of_ice_creams - 1 
        } 

       default: return state
    }
}

const root_reducer = combineReducers({
    cake: cake_reducer,
    ice_cream: ice_cream_reducer
})

// Create the store
const store  = createStore(root_reducer, applyMiddleware(logger))
// Get the initial state of the app
console.log('Initial state: ', store.getState())
// Allow the app to subscribe changes in the store
const unsubscribe = store.subscribe(() => {})
// Dispatch the actions
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
// Unsubscribe the app from the store
unsubscribe()


