export const add = () => ({ type: 'INCREMENT' });
export const minus = () => ({ type: 'DECREMENT' });
export const modifyText = payload => ({ type: 'CHANGE_TEST_TEXT', payload });