import { SAVE_NAME, MESSAGE_RESEIVED } from './actions';

const initialState = {
  messages: [],
  name: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NAME:
      return { ...state, name: action.payload.name };
    case MESSAGE_RESEIVED:
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export default reducer;
