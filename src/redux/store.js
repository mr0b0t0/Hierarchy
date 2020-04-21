import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { routerMiddleware } from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension'
const initialState = {}


const middleware = [thunk, routerMiddleware()]

const store = createStore(
    rootReducer,
    initialState, 
    composeWithDevTools(
        applyMiddleware(...middleware)
        )
    )


export default store