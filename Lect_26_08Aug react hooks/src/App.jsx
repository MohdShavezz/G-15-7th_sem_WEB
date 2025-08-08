import { useMemo, useRef, useState } from 'react';
import Blog from './Blog';
import UseCallbackExample from './UseCallback';
import UseReducerExample from './UseReducer';

function App() {
  const [count, setCount] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const ref=useRef(null)

  const computeExpensiveValue = (num) => {
    console.log("Computing...");
    let result = 0;
    for (let i = 0; i < 1000; i++) {
      result += num;
    }
    return result;
  };

  console.log('i m here')

  const result = useMemo(() => computeExpensiveValue(count), [{name:'sahv',age:21}]);

  
  return (
    <>
    <Blog/>
      <p>Count: {count}</p>
      <p>Result: {result}</p>
      <p>Render Count: {renderCount}</p>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setRenderCount(renderCount + 1)}>
        Increment Render Count
      </button>
<br />
<br />
      <input type="text" ref={ref} placeholder='useRef eg:'/>

      <UseCallbackExample/>
      <UseReducerExample/>

    </>
  )
}

export default App
