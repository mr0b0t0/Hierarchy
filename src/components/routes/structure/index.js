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
    display = () =>{
        console.log(`name - ${this.name}`);
    }
}


export class Structure{
    constructor(){
        this.root = null;
    }
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
    add = (newNode, parentId) =>{
        console.log('method __add__ was called ', newNode.name)
        if (this.root === null) this.root = newNode;
        else{
            const _map = node => {if(node.id == parentId)node.children.push(newNode);}
            this.traverse(node => _map(node));
        }
        return this;
    }
    delete = node => {
        if(!node) return;
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
    }
    displayUnique = id =>{
        this.traverse(item => {if(item.id===id) item.display()});
    }
    displayAll = () =>{
        if(this.root) this.traverse(item => item.display());
    }
}

