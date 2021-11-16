export function removeItem(itemToremove) {
  window.localStorage.removeItem(itemToremove);
}

export function getItem(item) {
  return window.localStorage.getItem(item);
}

export function addItem(localStorageName, newItem) {
  window.localStorage.setItem(localStorageName, newItem);
}
