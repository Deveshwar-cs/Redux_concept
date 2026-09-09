import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../features/counter/counterSlice";

const Child = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h4>{count}</h4>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Increment</button>
    </div>
  );
};

export default Child;
