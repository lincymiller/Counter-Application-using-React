import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <p>Counter Application Using React by Lincy Miller</p>
      <p>
        <a href="https://www.lincymiller.tech">www.lincymiller.tech</a>
      </p>
      <p>
        <a href="https://www.github.com/lincymiller">
          www.github.com/lincymiller
        </a>
      </p>
      <p>
        <a href="https://www.linkedin.com/in/lincy-m-99b228128/">
          www.linkedin.com/in/lincy-m-99b228128/
        </a>
      </p>
    </div>
  );
}

export default Counter;
