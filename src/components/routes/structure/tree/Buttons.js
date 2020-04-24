import React, {useState} from 'react';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import EditIcon from '@material-ui/icons/Edit';
import InputField from './InputField';
import Delete from './Delete';

import {add, edit} from '../../../actions';

// adding, editing, removing
const Buttons = ({structure, currentNode, setStructure}) => {
    const [addField, setAddField] = useState(false);
    const [editField, setEditField] = useState(false);
    const handleAddField = () =>{
        if(addField) setAddField(!addField);
        else if(editField){ 
            setEditField(!editField);
            setAddField(!addField);
        }
        else setAddField(!addField);
    }
    const handleEditField = () =>{
        if(editField) setEditField(!editField);
        else if(addField){ 
            setAddField(!addField);
            setEditField(!editField);
        }
        else setEditField(!editField);
    }
    return (
        <div style={{display: 'flex', flexDirection: 'row', paddingLeft: '5px'}}>
            <div onClick={handleAddField}>
                <AddRoundedIcon className='btn' color='disabled' />     
            </div>
            <div onClick={handleEditField}>
                <EditIcon className='btn' color='primary'/>
            </div>
            <Delete structure={structure} currentNode={currentNode} setStructure={setStructure} />
            <InputField 
            setToggle={setAddField}
            toggle={addField}
             label='Add Item'               
               action={add}
               structure={structure}
               currentId={currentNode.id}
               setStructure={setStructure}
               />
            <InputField
            setToggle={setEditField}
             toggle={editField} 
             label='Edit This Item'               
               action={edit}
               structure={structure}
               currentId={currentNode.id}
               setStructure={setStructure}
               />
        </div>
    );
}



export default Buttons;