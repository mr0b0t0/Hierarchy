import React from 'react';


// ul parent of all items
const TreeView = ({children}) => {
    return (
        <ul role='tree' aria-multiselectable="false">
            {children}
        </ul>
    );
}

export default TreeView;
