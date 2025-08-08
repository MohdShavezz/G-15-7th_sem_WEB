import React, { useState, useCallback } from 'react';

function Button({ handleClick, label }) {
  console.log(`Rendering ${label}`);
  return <button onClick={handleClick}>{label}</button>;
}

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const incrementOther = () => {
    setOther(prev => prev + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Other: {other}</h2>
      <Button handleClick={increment} label="Increment Count" />
      <Button handleClick={incrementOther} label="Increment Other" />
    </div>
  );
};

export default UseCallbackExample;
