import React, {Component} from 'react';

import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import {Link} from 'react-router-dom'

import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {add} from '../../redux/actions'

class Home extends Component{
    constructor(props){
        super(props);
        const state = {
            project: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    static propTypes = {
        add: PropTypes.func.isRequired,
        structure: PropTypes.object.isRequired
    }
    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () =>{
        this.props.add(this.state.project);
    }
    render(){
        return (
            <Container className='mgt'>
                <form>
                    <TextField
                    name='project'
                    value={this.project}
                    onChange={this.handleChange}
                    label="What is the name of your project?"
                        margin='normal'
                        fullWidth
                    />
                    <Link 
                    onClick={this.handleClick}
                    to={{
                        pathname: '/hierarchy'
                    }}
                    >
                        <Button variant="contained" color='primary' size='small' fullWidth>
                            Submit
                        </Button>
                    </Link>
                </form>
            </Container>
        );
    }
}


const mapStateToProps = state =>({
    structure: state.structure.structure
})

export default connect(mapStateToProps, {add})(Home);
