import React, {useState} from 'react';
import ListItem from './ListItem';



// recursive function, displays all elements in tree data structure way
const TreeItem = ({item, structure, setStructure, margin}) => {
    const [collapse, setCollapse] = useState(true);
    const handleCollapse = e =>{
        e.preventDefault();
        setCollapse(!collapse);
    }
    const Children = ({nodes, collapse}) => {
        if(nodes.length && !collapse){
            margin += 10;
            return (
                nodes.map(node =>  <TreeItem item={node} structure={structure} setStructure={setStructure} margin={margin}/>)
            );
        }
        return <></>
    }
    // to collapse/expand -> double click
    return (
        <>
            <div onDoubleClick={handleCollapse} style={{marginLeft: margin}}>
                <ListItem item={item} structure={structure} setStructure={setStructure} collapse={collapse}/>
            </div>
            <Children nodes={item.children} collapse={collapse}/>
        </>
    );
}

export default TreeItem;
