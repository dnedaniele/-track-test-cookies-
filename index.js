



 // send to write them to cookies
 function generateId() {
    return parseInt(Math.random() * 1000000); // 123123123123123
  }

  //Get User ID
  function getUserId() {
    console.log(document.cookie);

    const cookieValue = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user_id")); // "user=123123"

    

  }

 
var btnSetCookies = document.querySelector("#cookieSetter");
btnSetCookies.addEventListener("click",   function(){}) 