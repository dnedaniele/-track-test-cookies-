
function generateId() {
    return parseInt(Math.random() * 1000000); // 123123123123123
  }

  

  function sendCookie () {

        const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith("user_id")); // "user=123123"

          let userId = null;
    // New User
        if (cookieValue === null || cookieValue === undefined) {

          userId = generateId();
          document.cookie = "user_id=" + userId;
          let infoNewUser = " no cookie here - This is a New User, we add the cookies " + document.cookie;
          document.querySelector(".show-cookies").textContent = infoNewUser;
        }else{
            userId = cookieValue.split("=")[1];
            let infoOldUser = "   This is an Old User - existing cookie: user_id = " + userId;
            document.querySelector(".show-cookies").textContent = infoOldUser;
        }
        return userId;
}


function deleteCookie() {
    document.cookie = "user_id = deleteMe; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
}
  