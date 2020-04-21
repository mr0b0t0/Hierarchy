import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

import {remove} from '../actions'

// header, if the btn is pressed, removes the node of the structure 
const Header = ({structure, setStructure}) => {
    const handleDelete = e =>{
        e.preventDefault();
        setStructure(remove(structure, structure.root));
    }
    return (
        <AppBar color="primary" position="static">
          <Toolbar className='navbar'>
            <Button color='inherit' onClick={handleDelete}>
                Start Over
            </Button>
          </Toolbar>
        </AppBar>
    );
}

export default Header;
