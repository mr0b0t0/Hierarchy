import {ADD_SUCCESS, RENAME_SUCCESS, DELETE_SUCCESS} from './types';
import {combineReducers} from 'redux'
import { connectRouter } from 'connected-react-router' 
import {history} from './history'

import produce from 'immer'

import {Node, Structure} from '../components/routes/structure'


const initialState = {
    structure: new Structure()
}


const structure = (state=initialState, action) => {
    switch(action.type){
        case ADD_SUCCESS:
            console.log('add - reducer')
            return  produce(state, draftState =>{
                if(draftState.structure.root !== null){
                    draftState.structure.traverse(item =>{
                    if(item.id == action.currentNode.id){
                        item.children.push(action.newNode)
                    }
                })}
                else{
                    draftState.structure.root = action.newNode
                }
            })
        case RENAME_SUCCESS:
        case DELETE_SUCCESS:
        default:
        return state
    }
}



export default combineReducers({
    router: connectRouter(history),
    structure: structure
})
