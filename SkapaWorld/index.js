const loading = (value) =>
    parent.postMessage({ playdeck: { method: "loading", value: value } }, "*");
  
  const getPlaydeckState = (value) =>
    parent.postMessage({ playdeck: { method: "getPlaydeckState" } }, "*");
  
  const getScore = () =>
    parent.postMessage({ playdeck: { method: "getScore" } }, "*");
  
  const setScore = (value, isForce = false) =>
    parent.postMessage(
      { playdeck: { method: "setScore", value: value, isForce: isForce } },
      "*"
    );
  
  const getData = (key) =>
    parent.postMessage({ playdeck: { method: "getData", key: key } }, "*");
  const setData = (key, value) =>
    parent.postMessage(
      { playdeck: { method: "setData", key: key, value: value } },
      "*"
    );
  
  const getUserLocale = () =>
    parent.postMessage({ playdeck: { method: "getUserLocale" } }, "*");
  const getUser = () =>
    parent.postMessage({ playdeck: { method: "getUser" } }, "*");
  
  const gameEnd = () =>
    parent.postMessage({ playdeck: { method: "gameEnd" } }, "*");
  
  loading();
  setTimeout(() => {
    loading(100);
  }, 5000);