interface Node<T> {
  data: T;
  next: Node<T> | null;
}

import { useState } from "react";

function LinkedList() {
  const [head, setHead] = useState<Node<number> | null>(null);
  const [size, setSize] = useState<number>(0);
  const [value, setValue] = useState<number>(0);

  function addNode() {
    const newNode: Node<number> = { data: value, next: null };

    if (head === null) {
      setHead(newNode);
    } else {
      let currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    setSize(size + 1);
    setValue(0);
  }

  function removeNode() {
    let currentNode = head;
    let previousNode: Node<number> | null = null;

    while (currentNode !== null) {
      if (currentNode.data === value) {
        if (previousNode === null) {
          setHead(currentNode.next);
        } else {
          previousNode.next = currentNode.next;
        }
        setSize(size - 1);
        setValue(0);
        return;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    alert(`Value ${value} not found in linked list!`);
  }

  function popNode() {
    if (head === null) {
      alert("Cannot pop from empty list!");
    } else if (head.next === null) {
      setHead(null);
      setSize(0);
    } else {
      let currentNode = head;
      let previousNode: Node<number> | null = null;

      while (currentNode.next !== null) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode!.next = null;
      setSize(size - 1);
    }
  }

  return (
    <div className="linked-list-container">
      <h1>Interactive Linked List</h1>
      <div className="input-container">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(parseInt(e.target.value))}
          placeholder="Enter a value"
        />
        <button onClick={addNode}>Add</button>
        <button onClick={removeNode}>Remove</button>
        <button onClick={popNode}>Pop</button>
      </div>
      <div className="list-container">
        {head === null ? (
          <p className="empty-list-message">Empty List</p>
        ) : (
          <ul className="node-list">
            {Array.from({ length: size }, (_, index) => {
              let currentNode = head;
              for (let i = 0; i < index; i++) {
                currentNode = currentNode.next!;
              }
              return (
                <li key={index} className="node">
                  {currentNode.data}{" "}
                  {index < size - 1 && <span className="arrow">→</span>}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default LinkedList;
