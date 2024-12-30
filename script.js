function initialize() {
  const cookie = getCookie("sitename");
  if (!cookie) {
    const form = document.getElementById("search");
    form.classList.remove("hidden");
  } else {
    createIframe(cookie);
  }
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}

function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}`;
}

function openWebsite() {
  const form = document.getElementById("search");
  form.classList.add("hidden");
  const box = document.getElementById("searchbox");
  setCookie("sitename", box.value, 365);
  createIframe(box.value);
}

function createIframe(url) {
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  }

  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.className = 'full-viewport';
  document.body.appendChild(iframe);
}
