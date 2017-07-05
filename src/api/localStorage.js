export const loadState = () => {
  try {
    const localState = localStorage.getItem('state');
    if (localState === null) {
      return [];
    }
    return JSON.parse(localState)
  } catch (e) {
    return [];
  }
}

export const saveState = (state) => {
  try {
    const localState = JSON.stringify(state);
    localStorage.setItem('state', localState);
  } catch (e) {
    console.log(e);
  }
}