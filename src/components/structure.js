export class Node{
    constructor(id, name){
        this.id = id;
        this.name = name;
        this.children = [];
    }
    isParent = id =>{
        for(let i=0; i<this.children.length; i++) if(this.children[i].id === id) return true;
        return false;
    }
}


export class Structure{
    constructor(){
        this.root = null;
    }
    /* 
      goes through all nodes
       as a parameter it receives a callback function
        that is being called for all nodes added to this
    */
    traverse = callback =>{
        const _traverse = node =>{
            callback(node);
            if(node.children){
                node.children.forEach(child => {
                    _traverse(child);
                });
            }
        }
        _traverse(this.root);
    }
    // adds new node to a specific parent and then returns this
    add = (newNode, parentId) =>{
        if (this.root === null) this.root = newNode;
        else{
            const _map = node => {
                if(node.id === parentId){
                    node.children.push(newNode);
                }
            }
            this.traverse(node => _map(node));
        }
        return this;
    }
    // eddits a name of a specific node and then returns this
    editName = (name, id) =>{
        this.traverse(
            node => {
                if(node.id === id){
                    node.name = name;
                }
            }
        )
        return this;
    }
    // deletes a specific node from this and then returns this
    delete = node => {
        if(node === null) return this;
        if(this.root.id === node.id){ 
            this.root = null;
        }
        else{
            this.traverse(
                item => {
                    if(item.isParent(node.id))
                    item.children
                    .filter(
                        element => element.id !== node.id);
                }
            )
        }
        return this;
    }
}