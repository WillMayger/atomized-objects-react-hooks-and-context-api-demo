
export function getInitialState(reducers) {
  const reducersCombined = {};
  for (let i = 0; i < reducers.length; i++) {
    reducersCombined[reducers[i].name] = reducers[i](undefined, {});
  }
  return reducersCombined;
}

export function combineReducers(reducers) {
  return function useReducers(state, action) {
    for (let i = 0; i < reducers.length; i++) {
      const defaultOutput = reducers[i](state[reducers[i].name], {});
      const newOutput = reducers[i](state[reducers[i].name], action);

      let st1 = defaultOutput;
      let st2 = newOutput;

      if (typeof defaultOutput === 'object') {
        st1 = JSON.stringify(defaultOutput);
        st2 = JSON.stringify(newOutput);
      }

      if (st1 !== st2) {
        const nextState = {};
        nextState[reducers[i].name] = newOutput;
        return { ...state, ...nextState };
      }
    }
    return state;
  };
}