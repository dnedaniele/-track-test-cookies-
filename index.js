// GENERATE COOKIES
function generateId() {
  return parseInt(Math.random() * 1000000); // 123123123123123
}

// SEND COOKIES
function sendCookie() {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("user_id")); // "user=123123"

  let userId = null;
  // New User
  if (cookieValue === null || cookieValue === undefined) {
    userId = generateId();
    document.cookie = "user_id=" + userId;
    let infoNewUser =
      " no cookies here - This is a New User, we add the cookies: " +
      document.cookie;
    document.querySelector(".show-cookies").textContent = infoNewUser;
  } else {
    userId = cookieValue.split("=")[1];
    let infoOldUser =
      "   This is an Old User - existing cookies: user_id = " + userId;
    document.querySelector(".show-cookies").textContent = infoOldUser;
  }
  return userId;
}

// DELETE COOKIES
function deleteCookie() {
  document.cookie =
    "user_id = deleteMe; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    document.querySelector(".deletionConfirmation").innerHTML = "You deleted all your cookies"
}

// SHOW USER AGENT
function showUserAgent() {
    let userAgent = navigator.userAgent;
    document.querySelector(".show-userAgent").textContent = userAgent;
}
