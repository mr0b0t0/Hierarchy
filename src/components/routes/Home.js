import React, {useState} from 'react';

import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import Elements from './structure/Elements'



import {add} from '../actions'


// handles displaying the elements
const Display = ({structure, setStructure}) =>{
    const none = <></>;
    const elements = <Elements structure={structure} setStructure={setStructure}/>;
    return structure.root ? elements : none;
}

// handles displaying the very first form
const Form = ({name, project, handleChange, handleClick, structure}) => {
    if(structure.root === null){
        return (
            <form>
                <TextField
                name={name}
                value={project}
                onChange={handleChange}
                label="What is the name of your project?"
                margin='normal'
                fullWidth
                />
                <Button onClick={handleClick} variant="contained" color='primary' size='small' fullWidth>
                    Submit
                </Button>
            </form>
        )
    }
    return <></>
}

// displays the tree
const Home = ({structure, setStructure}) => {
    const [project, setProject] = useState('');
    const handleClick = () =>{
        add(structure, project);
        setProject('');
    }
    return (
        <Container className='mgt'>
            <Form
            name='project'
            project={project}
            handleChange={e => setProject(e.target.value)}
            handleClick={handleClick}
            structure={structure}
            />
            <h4>Project</h4>
            <Display structure={structure} setStructure={setStructure}/>
        </Container>
    );
}


export default Home;
