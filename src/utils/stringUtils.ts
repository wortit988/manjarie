export const clipText = (str, limit = 25) => {
  if (str.length > limit) {
    str = str.slice(0, limit) + "...";
  }
  return str;
};
