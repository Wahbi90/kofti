export const createAction = () => (dispatch) => {
  const data = 'electronics';
  console.log('clicked');
  dispatch({
    type: data,
    payload: 'electronics',
  });
};
const initial = { data: [] };
export function reducer(state = initial, action) {
  switch (action.type) {
    case 'electronics':
      return { ...initial, data: [...action.payload, ...state.data] };
  }
}
