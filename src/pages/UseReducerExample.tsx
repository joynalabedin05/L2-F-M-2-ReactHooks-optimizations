import React, { useReducer } from 'react';

const initialstate = {count: 0};
const reducer  =(currentState, action)=>{
    switch (action.type) {
        case 'increment':
            return {count: currentState.count + 1};
        case 'decrement':
            return {count: currentState.count - 1};
        case 'incrementByThree':
            return {count: currentState.count + action.payload};
    
        default:
            return currentState;
    }
}
const UseReducerExample = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={()=>dispatch({type: 'increment'})} className='btn btn-primary'>increment</button>
            <button onClick={()=>dispatch({type: 'decrement'})} className='btn btn-primary mx-5'>decrement</button>
            <button onClick={()=>dispatch({type: 'incrementByThree', payload: 3})} className='btn btn-primary'>increment by three</button>
        </div>
    );
};

export default UseReducerExample;