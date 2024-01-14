// import { useState } from 'react';
import './App.css'
import UseEffectExample from './pages/UseEffectExample'
// import UseReducerExample from './pages/UseReducerExample'
import UseStateExample from './pages/UseStateExample'

function App() {
  // const [counter, setCounter] = useState(0);

  return (
     <div className='m-5'>
      <UseStateExample />
      {/* <UseReducerExample></UseReducerExample> */}
      <UseEffectExample></UseEffectExample>
     </div>
  )
}

export default App
