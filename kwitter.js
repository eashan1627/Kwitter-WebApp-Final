 function adduser() { 
 user_name2= document.getElementById("user_name").value;
 localStorage.setItem("user_name", user_name2);
 window.location= "kwitter_room.html";
 }