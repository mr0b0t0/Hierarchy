import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <AppBar color="primary" position="static">
        <Link to='/'>
          <Toolbar className='navbar'>
            <Button color='inherit'>
                Start Over
            </Button>
          </Toolbar>
          </Link>
        </AppBar>
    );
}

export default Header;
