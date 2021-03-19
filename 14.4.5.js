formatDate = (strDate) => {
  date = new Date(strDate);
  let dd = String(date.getDate()).padStart(2, "0"),
      mm = String(date.getMonth() + 1).padStart(2, "0"),
      yyyy = date.getFullYear(),
      h = String(date.getHours()).padStart(2, "0"),
      m = String(date.getMinutes()).padStart(2, "0");
  return `${dd}.${mm}.${yyyy} ${h}:${m}`;
}

setStorage = (userName) => {
  let today = new Date();
  let userData = {
    "userName": userName,
    "lastVisited": today
  };
  localStorage.setItem("userData", JSON.stringify(userData));
}

document.addEventListener("DOMContentLoaded", () => {

  let userData = localStorage.getItem("userData") || "";

  if(userData.length == 0) {
    let userName = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
    setStorage(userName);
  }
  else {
    userData = JSON.parse(userData);
    alert(`Добрый день, ${userData.userName}! Давно не виделись. В последний раз вы были у нас ${formatDate(userData.lastVisited)}`);
    setStorage(userData.userName);
  };
});