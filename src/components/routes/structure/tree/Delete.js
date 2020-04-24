import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import {remove} from '../../../actions';

const Delete = ({structure, currentNode, setStructure}) => {
    const handleDelete = e =>{
        e.preventDefault();
        setStructure(remove(structure, currentNode));
    }
    return (
        <div onClick={handleDelete}>
            <DeleteIcon className='btn' color='secondary'/>
        </div>
    );
}

export default Delete;
