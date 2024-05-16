import React from "react";

const Counter = () => {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    if (action.type === "increment") {
      return { count: state.count + action.paylaod };
    } else if (action.type === "decrement") {
      return { count: state.count - action.paylaod };
    } else if (action.type === "reset") {
      return { count: 0 };
    }
  };

  const [state, dispatch] = React.useReducer(reducer, initialState);

  const design = (
    <>
      <div>Counter: {state.count}</div>
      <div>
        <button type="button" onClick={() => dispatch({type:'increment', paylaod:5})}>INCREMENT</button>
        <button type="button" onClick={() => dispatch({type:'decrement', paylaod:2})}>DECREMENT</button>
        <button type="button" onClick={() => dispatch({type:'reset'})}>RESET</button>
      </div>
    </>
  );

  return design;
};

export default Counter;
