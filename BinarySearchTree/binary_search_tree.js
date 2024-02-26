

class Node{
    constructor(data,left = null,right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }

}


class BST{
    constructor(){
        this.root = null;
    }
    add(data){
        const node = this.root;
        // IF THE TREE HAS NO ROOT WE ASSIGN THE ADDED NODE TO BE THE ROOT NODE
        if (node === null){
            this.root = new Node(data);
            return;
        } else {
            // FUNCTION TO SEARCH IN THE TREE
            const searchTree = function(node){
                // IF ROOT DATA IS GREATER THAN ADDED DATA
                if (data < node.data){
                    // IF ROOT LEFT NODE IS EMPTY WE ADD THE NODE THERE
                    if (node.left === null){
                        node.left = new Node(data);
                        return;
                    }
                    // IF THE NODE ON THE LEFT OF THE ROOT IS NOT EMPTY USE RECURSION
                    else if (node.left !== null){
                        return searchTree(node.left);
                    }
                }
                // IF THE ROOT DATA IS LESS THAN THE ADDED DATA
                else if (data > node.data){
                    // IF ROOT RIGHT IS EMPTY WE ADD THE NODE THERE
                    if (node.right === null){
                        node.right = new Node(data);
                        return;
                    }
                    // IF ROOT RIGHT IS NOT EMPTY WE RUN THE ALGORITHM AGAIN
                    else if (node.right !== null){
                        return searchTree(node.right);
                    }
                }
                // MEANS THAT THE NODE IS ALREADY INSERTED ON THE TREE
                else {
                    return null;
                }
            }
            return searchTree(node);
        }
    }
    findMin() {
        let current = this.root;
        while (current.left !== null){
            current = current.left;
        }
        return current.data;
    }
    findMax(){
        let current = this.root;
        while (current.right !== null){
            current = current.right;
        }
        return current.data;
    }
    find(data){
        let current = this.root;
        while (current.data !== data){
            if (data < current.data){
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null){
                return null;
            }
        }
        return current.data;
    }

    isPresent(data){
        let current = this.root;
        while (current){
            if (data === current.data){
                return true;
            }
            if (data < current.data){
                current = current.left;
            } else {
                current = current.right;
            }
        
        }
        return false;
    }

    remove(data){
        const removeNode = function(node,data){
            //CHECK IF THE NODE IS EMPTY IF SO RETURN NULL
            if (node == null){
                return null;
            }
            // CHECK IF THE CURRENT NODE DATA IS EQUAL TO THE DATA TO REMOVE
            if (data == node.data){
                // IF THE NODE HAS NO CHILDREN WE REMOVE THE NODE
                if (node.left == null && node.right == null){
                    return null;
                }
                // IF THE NODE TO REMOVE HAS NO LEFT CHILDREN WE REPLACE THE NODE VALUE FOR THE RIGHT CHILDREN VALUE
                if (node.left == null){
                    return node.right;
                }
                // IF THE NODE TO REMOVE HAS NO RIGHT CHILDREN WE REPLACE THE NODE VALUE FOR THE LEFT NODE VALUE
                if (node.right == null){
                    return node.left;
                }
                // IF THE NODE HAS TWO CHILDREN 
                var tempNode = node.right;
                // WE TAKE A STEP RIGHT AND THEN PICK THE MOST LEFT NUMBER
                while (tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right,tempNode.data);
                return node;
            }   else if (data < node.data){
                    node.left = removeNode(node.left,data);
                    return node;
                } else {
                    node.right = removeNode(node.right,data);
                    return node;
                }
                
        }
        this.root = removeNode(this.root,data);
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1)
      }

    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }

    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        };
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        };
    }
    inOrder() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traverseInOrder(node) {       
          node.left && traverseInOrder(node.left);
          result.push(node.data);
          node.right && traverseInOrder(node.right);
        }
        traverseInOrder(this.root);
        return result;
      };
    }
    preOrder() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traversePreOrder(node) {
          result.push(node.data);
          node.left && traversePreOrder(node.left);
          node.right && traversePreOrder(node.right);
        };
        traversePreOrder(this.root);
        return result;
      };
    }
    postOrder() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traversePostOrder(node) {
          node.left && traversePostOrder(node.left);
          node.right && traversePostOrder(node.right);
          result.push(node.data);
        };
        traversePostOrder(this.root);
        return result;
      }
    }
    
    levelOrder() {
        let result = [];
        let Q = []; 
        if (this.root != null) {
            Q.push(this.root);
            while(Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left != null) {
                    Q.push(node.left);
                };
                if (node.right != null) {
                    Q.push(node.right);
                };
            };
            return result;
        } else {
            return null;
        };
    };
}

const bst = new BST();

bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

/* 
TREE
                9
            /      \
           4       17
           /\       \
          3  6       22
             /\      /
             5 7    20

*/
console.log("Root: ");
console.log(bst.root.data);
console.log("Root right: ");
console.log(bst.root.right.data);
console.log("Min: ");
console.log(bst.findMin());
console.log("Max: ");
console.log(bst.findMax());
console.log("Find: ");
console.log(bst.find(7));
console.log("Is present: {9,0}");
console.log(bst.isPresent(9));
console.log(bst.isPresent(0));

console.log(bst.isBalanced())
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());
console.log('levelOrder: ' + bst.levelOrder());
