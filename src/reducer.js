let state = { count: 0 };
let action = { type: "counter/increment" };

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

changeState(state, action);

function render() {
  const app = document.querySelector('#app');
  app.textContent = `Count: ${state.count}`;
}

function dispatch(action) {
  state = changeState(state, action);
  render();
  // return state;
}

dispatch({ type: 'counter/increment' });
dispatch({ type: 'counter/increment' });