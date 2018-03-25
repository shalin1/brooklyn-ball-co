export const set = (name, value, days) => {
  let expires, date;
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  } else {
    date = new Date(2147483647000);
  }
  expires = "; expires=" + date.toUTCString();
  document.cookie = name + "=" + value + expires + "; path=/";
};

export const get = name => {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(name + "=");
    if (c_start !== -1) {
      c_start += name.length + 1;
      let c_end = document.cookie.indexOf(";", c_start);
      if (c_end === -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return "";
};
