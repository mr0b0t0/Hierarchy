import {ADD_SUCCESS, RENAME_SUCCESS, DELETE_SUCCESS} from './types';
import { v4 as uuid4 } from 'uuid';
import {Node} from '../components/routes/structure'

const edit = (structure, currentNode, name) =>{
    currentNode.name = name;
    structure.traverse(node => {
        if(node.id===currentNode.id){
            node.name = name;
        }
    })
}

export const add = (name, currentNode) => dispatch =>{
    const newNode = new Node(uuid4(), name);
    console.log('add - action ', newNode.id, ' ', newNode.name);
    dispatch({
        type: ADD_SUCCESS,
        newNode: newNode,
        currentNode: currentNode
    })
}



