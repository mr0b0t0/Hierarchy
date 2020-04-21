import {Node} from './structure'
import { v4 as uuid4 } from 'uuid';

export const add = (structure, name, currentId) =>{
    const newNode = new Node(uuid4(), name);
    return structure.add(newNode, currentId);
}


export const edit = (structure, name, currentId) =>{
    return structure.editName(name, currentId);
}

export const remove = (structure, node) =>{
    return structure.delete(node);
}

