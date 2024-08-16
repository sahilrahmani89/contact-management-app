import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {increment ,decrement} from './feature/contact/contactSlice'
import './App.css';


function App() {
  const count = useSelector((state:any) => state.contact.value);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>
    <div className="flex space-x-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
    </div>
  </div>
  );
}

export default App;
