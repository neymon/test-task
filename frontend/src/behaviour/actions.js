export const MESSAGE_RESEIVED = 'MESSAGE_RESEIVED';
export const messageReseived = ({ name, message }) => ({
  type: MESSAGE_RESEIVED,
  payload: { name, message },
});

export const SAVE_NAME = 'SAVE_NAME';
export const saveName = ({ name }) => ({
  type: SAVE_NAME,
  payload: { name }
});
