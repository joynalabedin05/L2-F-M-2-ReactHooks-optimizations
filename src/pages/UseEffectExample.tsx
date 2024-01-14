import React, { useEffect, useState } from 'react';


const UseEffectExample = () => {
    // const [count, setCount] = useState(0);
    // useEffect(()=>{
    //    const intervalId = setInterval(()=>{
    //         console.log('render');
    //         setCount((pre)=>pre+1);
    //     },1000)
    //   return ()=> clearInterval(intervalId);
    // },[])

    const [hidden, setHidden] = useState(false);
    return (
        <div>
            {/* <h1>{count}</h1> */}
            <button onClick={()=>setHidden((pre)=>!pre)} className='bg-zinc-200 p-1 rounded'>{hidden? 'show': 'hide'}</button>
            {!hidden && <ToDo></ToDo>}
        </div>
    );
};

const ToDo = ()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1', {signal})
      .then(response => response.json())
      .then(data => alert(data.title))
      return ()=>{
        controller.abort();
      }
    },[])
    return <div>todo</div>
}
export default UseEffectExample;