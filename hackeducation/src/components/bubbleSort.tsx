import { useState } from "react";

function BubbleSort() {
  const [array, setArray] = useState<number[]>([]);
  const [isSorting, setIsSorting] = useState<boolean>(false);

  function generateArray() {
    const newArray: number[] = [];

    for (let i = 0; i < 10; i++) {
      newArray.push(Math.floor(Math.random() * 100) + 1);
    }

    setArray(newArray);
  }

  function bubbleSort() {
    setIsSorting(true);

    const arrayCopy = [...array];
    const n = arrayCopy.length;

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        setTimeout(() => {
          if (arrayCopy[j] > arrayCopy[j + 1]) {
            const temp = arrayCopy[j];
            arrayCopy[j] = arrayCopy[j + 1];
            arrayCopy[j + 1] = temp;

            setArray(arrayCopy);
          }
        }, (i * (n - 1) + j) * 1000);
      }
    }

    setTimeout(() => {
      setIsSorting(false);
    }, (n - 1) * (n - 2) * 500);
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Bubble Sort Visualization</h1>
        <button disabled={isSorting} onClick={generateArray}>
          Generate Array
        </button>
        <button disabled={isSorting} onClick={bubbleSort}>
          Sort
        </button>
      </div>
      <div className="array">
        {array.map((value, index) => (
          <div key={index} className="value" style={{ height: `${value}%` }}>
            {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BubbleSort;
