import React, { useReducer,  } from "react";

// type TCounter = {
//     counter: number;
//     setCounter: React.Dispatch<React.SetStateAction<number>>;


// }

type TAction = {
    type: string;
    payload: string;
}
const initialstate = {name: '', email: ''};
const reducer  =(currentState: typeof initialstate, action: TAction)=>{
switch (action.type) {
    case 'addName':
        return { ...currentState, name: action.payload} ;
    case 'addEmail':
        return { ...currentState, email:action.payload} ;
    default:
        return currentState;
}
}
const UseStateExample = ()  => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [user, setUser] = useState({name: '', email: ''});
    const [state, dispatch] = useReducer(reducer, initialstate);

   
    // const handleSubmit  = (e: React.ChangeEvent<HTMLFormElement>) =>{
    //     e.preventDefault();
    //     // console.log(name, email);
    //     console.log(user);
    // }

     const handleSubmit  = (e: React.ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault();
        // console.log(name, email);
        console.log(state);
    }
    
    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    //     const inputName = e.target.name;
    //     const value = e.target.value;
    //     // setUser({...user, name: e.target.value});
    //     setUser({...user, [inputName]: value})
    // }
    return (
        <>
        <div className="p-7">
            {/* <form onSubmit={handleSubmit}>
                <input className="border-2" onChange={handleChange} type="text" name="name" id="name"/>
                <input className="border-2" onChange={handleChange} type="text" name="email" id="email"/>
                <button type="submit">Submit</button>
            </form> */}
            <form onSubmit={handleSubmit}>
                <input onChange={(e)=>dispatch({type: 'addName', payload: e.target.value})} className="border-2"  type="text" name="name" id="name"/>
                <input onChange={(e)=>dispatch({type: 'addEmail', payload: e.target.value})} className="border-2"  type="text" name="email" id="email"/>
                <button type="submit">Submit</button>
            </form>
        </div>
        </>
    );
};

export default UseStateExample;