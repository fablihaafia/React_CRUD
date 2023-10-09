import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { incrementCounter } from '../services/actions/CounterAction';

const Counter = () => {

    const count =useSelector(state=>state.count);
    const dispatch = useDispatch();

    const handleIncrement=()=>{
        dispatch(incrementCounter());
    };
    return ( 
        <>
       <h2>Counter App</h2>
       <h6>Count:{count}</h6>
       <button onClick={handleIncrement}>Increment</button>
        </>
     );
}
 
export default Counter;