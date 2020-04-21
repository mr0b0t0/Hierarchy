
import React, { Component } from 'react';
import { TreeItem } from '@material-ui/lab';
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


import Buttons from './Buttons'


import {connect} from 'react-redux'
import PropTypes from 'prop-types'


class Elements extends Component{
    static propTypes = {
        structure: PropTypes.object.isRequired
    }
    constructor(props){
        super(props);
        const state = {
            structure: this.props.structure
        }
    }
    componentDidMount(){
        console.log('component did mount')
        this.props.structure.traverse(item => item.display())
    }
    _Elements = Node => {
        if (Node !== null && Node.children.length){
            return (
                <>
                <Buttons currentNode={Node}/>
                    <TreeItem key={Node.id} nodeId={Node.id} label={Node.name}>
                        {Node.children.map(node => this._Elements(node))}
                    </TreeItem>
                </>
            );
        }
        // else if(Node !== null){
            return (
                <>
                    <Buttons currentNode={Node}/>
                    <TreeItem key={Node.id} nodeId={Node.id} label={Node.name}/>
                </>
            );
        // }
            // return <></>
    }
    render(){
        return (
            <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            >   
                {this._Elements(this.props.structure.root)}
            </TreeView>
        )
    }
}

const mapStateToProps = state =>({
    structure: state.structure.structure
})

export default connect(mapStateToProps)(Elements);