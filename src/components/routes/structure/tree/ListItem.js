import React from 'react';
import Buttons from './Buttons';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import BlockIcon from '@material-ui/icons/Block';


// if the received node does not have any children, this will be the icon on the left
const NoChildrenIcon = () =>{
    return(
        <div className='noChildrenIcon'>
            <BlockIcon style={{width: '15px', height:'15px'}}/>
        </div>
    );
}

// collapse or expand or noChildrenIcon
const Icon = ({collapse, children}) =>{
    const icon = collapse ?  <ChevronRightIcon/> : <ExpandMoreIcon/>;
    if(children.length) return icon;
    return <NoChildrenIcon/>;
}

// displays a node 
const ListItem = ({item, structure, setStructure, collapse}) => {
    return (
        <>
            <Buttons structure={structure} currentNode={item} setStructure={setStructure}/>
            <li key={item.key}>
                <Icon collapse={collapse} children={item.children}/>
                <strong>{item.name}</strong>
            </li>
        </>
    );
}

export default ListItem;
