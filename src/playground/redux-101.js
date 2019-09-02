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

store.subscribe(() => {
  console.log(store.getState());
});

// console.log(store.getState());

store.dispatch({ type: 'INCREMENT', incrementBy: 5 });
store.dispatch({ type: 'INCREMENT' });

// console.log(store.getState());

store.dispatch({ type: 'DECREMENT', decrementBy: 3 });
// console.log(store.getState());

store.dispatch({ type: 'RESET' });

// console.log(store.getState());
