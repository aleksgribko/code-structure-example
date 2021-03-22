export const setItemInStorage = (key, data) => {
  return localStorage.setItem(key, data);
};

export const getItemFromStorage = (key) => {
  return localStorage.getItem(key);
};

export const removeItemFromStorage = (key) => {
  return localStorage.removeItem(key);
};
