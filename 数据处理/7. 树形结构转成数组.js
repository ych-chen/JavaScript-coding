let tree = {
    id: 1,
    children: [
        {
        id: 2,
        children: [
            {
            id: 4
            },
            {
            id: 5
            }
        ]
        },
        {
        id: 3
        }
    ]
};
  

function treeToList(tree){
    let res = []
    
    function traverse(node, pid){
        res.push({ id: node.id , pid: pid});
        if(node.children){
            for(let child of node.children){
                traverse(child, node.id);
            }
        }
    }
    traverse(tree, null);
    return res;
}