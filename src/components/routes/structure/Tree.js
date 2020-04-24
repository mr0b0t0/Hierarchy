
import React from 'react';
import TreeItem from './tree/TreeItem';
import TreeView from './tree/TreeView';


// displays the tree structure
const Tree = ({structure, setStructure}) =>{
    return (
        <>
            <TreeView>   
                <TreeItem item={structure.root} structure={structure} setStructure={setStructure} margin={0}/>
            </TreeView>
        </>
    )
}

export default Tree;