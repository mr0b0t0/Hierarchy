
import React from 'react';
import { TreeItem } from '@material-ui/lab';
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


import Buttons from './Buttons'


const Elements = ({structure, setStructure}) =>{
    const _Elements = Node => {
        if (Node.children.length){
            return (
                <>
                <Buttons structure={structure} currentNode={Node} setStructure={setStructure}/>
                    <TreeItem key={Node.id} nodeId={Node.id} label={Node.name}>
                        {Node.children.map(node => _Elements(node))}
                    </TreeItem>
                </>
            );
        }
            return (
                <>
                    <Buttons structure={structure} currentNode={Node} setStructure={setStructure}/>
                    <TreeItem key={Node.id} nodeId={Node.id} label={Node.name}/>
                </>
            );
    }
    return (
        <TreeView
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        >   
            {_Elements(structure.root)}
        </TreeView>
    )
}

export default Elements;