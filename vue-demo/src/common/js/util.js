export const setItem = (name, val) => {
  val = JSON.stringify(val);

  return window.localStorage.setItem(name, val);
}
export const getItem = name => {
  name = window.localStorage.getItem(name);
  name = JSON.parse(name);

  return name
};
export const removeItem = opt => window.localStorage.removeItem(opt);
