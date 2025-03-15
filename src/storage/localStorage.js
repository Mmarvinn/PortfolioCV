const VUE_COMPOSITION = 'Vue_Composition';

export const getLocalStorageData = () => {
  const data = localStorage.getItem(VUE_COMPOSITION);
  return JSON.parse(data);
};

export const setLocalStorageData = (data) => {
  const json = JSON.stringify(data);
  localStorage.setItem(VUE_COMPOSITION, json);
};

export const deleteLocalStorageData = () => {
  localStorage.removeItem(VUE_COMPOSITION);
};
