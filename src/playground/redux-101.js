import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  const { type, incrementBy, decrementBy } = action;
  const increment = typeof incrementBy === 'number' ? incrementBy : 1;
  const decrement = typeof decrementBy === 'number' ? decrementBy : 1;

  switch (type) {
    case 'INCREMENT':
      return { count: state.count + increment };
    case 'DECREMENT':
      return { count: state.count - decrement };
    case 'RESET':
      return { count: 0 };
    default:
      return state;
  }
});

const increment = (by) => ({
  type: 'INCREMENT',
  incrementBy: by,
});

const decrement = (by) => ({
  type: 'DECREMENT',
  decrementBy: by,
});

const reset = () => ({
  type: 'RESET',
});

store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store.getState());

// store.dispatch({ type: 'INCREMENT', incrementBy: 5 });
store.dispatch(increment(5));

// console.log(store.getState());

store.dispatch(decrement(15));
// console.log(store.getState());

store.dispatch(reset());

// console.log(store.getState());
