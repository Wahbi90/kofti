export const changeCategory = (category) => ({
  type: 'CHANGE_CATEGORY',
  payload: category,
});

const initial = { data: [], currentCategorie: null };

export function reducer(state = initial, action) {
  switch (action.type) {
    case 'CHANGE_CATEGORY':
      return { ...initial, currentCategorie: action.payload };
    default:
      return state;
  }
}
