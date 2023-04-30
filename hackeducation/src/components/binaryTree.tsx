import { useState } from "react";

interface Node {
  value: number;
  left: Node | null;
  right: Node | null;
}

function BinaryTree() {
  const [root, setRoot] = useState<Node | null>(null);
  const [value, setValue] = useState<number>(0);

  function insertNode() {
    const newNode: Node = { value, left: null, right: null };

    if (root === null) {
      setRoot(newNode);
    } else {
      let currentNode = root;

      // eslint-disable-next-line no-constant-condition
      while (true) {
        if (value < currentNode.value) {
          if (currentNode.left === null) {
            currentNode.left = newNode;
            break;
          } else {
            currentNode = currentNode.left;
          }
        } else {
          if (currentNode.right === null) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }

    setValue(0);
  }

  function searchTree(node: Node | null, value: number): boolean {
    if (node === null) {
      return false;
    } else if (node.value === value) {
      return true;
    } else if (value < node.value) {
      return searchTree(node.left, value);
    } else {
      return searchTree(node.right, value);
    }
  }

  return (
    <div className="binary-tree-container">
      <h1>Interactive Binary Tree Creator</h1>
      <h2>assort number on a horizaontal axis</h2>
      <div className="input-container">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          placeholder="Enter a value"
        />
        <button onClick={insertNode}>Insert</button>
      </div>
      <div className="tree-container">
        {root === null ? (
          <p className="empty-tree-message">Empty Tree</p>
        ) : (
          <ul className="node-list">
            <TreeNode node={root} />
          </ul>
        )}
      </div>
      <div className="search-container">
        <p>check the console for result</p>
        <input
          type="number"
          placeholder="Enter a value to search"
          onChange={(e) => {
            const value = parseInt(e.target.value);
            console.log(
              `Value ${value} is ${
                searchTree(root, value) ? "" : "not "
              }in the tree`
            );
          }}
        />
      </div>
    </div>
  );
}

interface TreeNodeProps {
  node: Node;
}

function TreeNode({ node }: TreeNodeProps) {
  return (
    <li className="node">
      <span>{node.value}</span>
      {node.left !== null && (
        <ul className="node-list">
          <TreeNode node={node.left} />
        </ul>
      )}
      {node.right !== null && (
        <ul className="node-list">
          <TreeNode node={node.right} />
        </ul>
      )}
    </li>
  );
}

export default BinaryTree;
