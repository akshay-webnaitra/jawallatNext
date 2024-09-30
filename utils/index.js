import _ from "lodash";

export function on(obj, ...args) {
  obj.addEventListener(...args);
}

export function off(obj, ...args) {
  obj.removeEventListener(...args);
}

export function slugify(str) {
  if (!!str) {
    str = str.replace(" ", "-");
    return str;
  }
}

export const stripMenu = (item) => {
  if (!!item) {
    item = item.replace(" ", "");
    item = item.replace("-", "");
    return item;
  }
};
