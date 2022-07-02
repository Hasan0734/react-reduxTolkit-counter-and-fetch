import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, incrementByArgu, reset} from './counterSlice'

export default function CounterView() {
    const {count}  = useSelector(state => state.counter);
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Count: {count}</h2>

        <button className='btn btn-primary m-1' onClick={() => dispatch(increment())}>Increment</button>
        <button className='btn btn-warning m-1' onClick={() => dispatch(decrement())}>Decrement</button>
        <button className='btn btn-danger m-1' onClick={() => dispatch(reset())}>Reset</button>
        <button className='btn btn-secondary m-1' onClick={() => dispatch(incrementByArgu(5))}>IncrementByFive</button>
    </div>
  )
}
