import React, {useState} from 'react'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import InputField from './InputField'


const Buttons = currentId => {
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
        <div style={{display: 'flex', flexDirection: 'row', margin: '5px'}}>
            <div onClick={handleAddField}>
                <AddRoundedIcon className='btn' color='disabled' />     
            </div>
            <div onClick={handleEditField}>
                <EditIcon className='btn' color='primary'/>
            </div>
            <DeleteIcon className='btn' color='secondary'/>
            <InputField 
            setToggle={setAddField}
            toggle={addField}
             label='Add Item'               
               action='add'
               />
            <InputField
            setToggle={setEditField}
             toggle={editField} 
             label='Edit This Item'               
               action='edit'
               />
        </div>
    );
}



export default Buttons;