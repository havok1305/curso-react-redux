export const inc = () => {
  return {
    type: 'INC',
  };
};

export const dec = () => {
  return {
    type: 'DEC',
  };
};

export const stepChanged = (e) => {
  return {
    type: 'STEP_CHANGED',
    payload: e.target.value,
  };
};
