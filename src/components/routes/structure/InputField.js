import React, {Component} from 'react';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import  {add} from '../../../redux/actions'


class InputField extends Component {
    constructor(props){
        super(props)
        const state = {
            value: ''
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    static propTypes = {
        add: PropTypes.func.isRequired,
        structure: PropTypes.object.isRequired
    }
    handleClick = e =>{
        e.preventDefault();
        this.props.add(this.state.value, this.props.currentNode);
        this.props.setToggle(!this.props.toggle);
        this.props.structure.traverse(item => console.log(item.name, ' ', item.id))
    }
    handleChange = e =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {

        if(this.props.toggle){
            return(
                <form style={{display:'flex', flexDirection:'row', marginLeft: '30px', alignItems:'center'}}>
                    <TextField
                    value={this.value}
                    name='value'
                    onChange={this.handleChange}
                    size='small'
                    id="standard-basic"
                    label={this.props.label}
                    />
                    <div onClick={this.handleClick}>
                        <SendRoundedIcon className='btn' style={{marginLeft: '5px', marginTop: '20px'}} color='primary'/>
                    </div>
                </form>
            )
        }
        return <></>
    }
}

const mapStateToProps = state =>({
    structure: state.structure.structure
})

export default connect(mapStateToProps, {add})(InputField);