const count = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const test = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_TEST_TEXT':
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};


export default [
  count,
  test,
];