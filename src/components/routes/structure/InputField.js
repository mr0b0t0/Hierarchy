import React, {useState} from 'react';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import TextField from '@material-ui/core/TextField';



const InputField = ({setToggle, toggle, label, action, structure, currentId, setStructure}) => {
    const [value, setValue] = useState('');
    const handleClick = e =>{
        e.preventDefault();
        setToggle(!toggle);
        setStructure(action(structure, value, currentId));
    }
    if(toggle){
        return(
            <form style={{display:'flex', flexDirection:'row', marginLeft: '30px', alignItems:'center'}}>
                <TextField
                value={value}
                name='value'
                onChange={e => setValue(e.target.value)}
                size='small'
                id="standard-basic"
                label={label}
                />
                <div onClick={handleClick}>
                    <SendRoundedIcon className='btn' style={{marginLeft: '5px', marginTop: '20px'}} color='primary'/>
                </div>
            </form>
        )
    }
    return <></>
}

export default InputField;