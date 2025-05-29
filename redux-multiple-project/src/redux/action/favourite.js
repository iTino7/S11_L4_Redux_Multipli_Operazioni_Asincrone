export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";

export const addToFavourite = (favourite) => ({
  type: ADD_TO_FAVOURITE,
  payload: favourite,
});
export const removeFromFavourite = (favourite) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: favourite,
});
