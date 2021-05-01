 //ADD YOUR FIREBASE LINKS HERE
 var firebaseConfig = {
      apiKey: "AIzaSyBI1bjk5utgXGKsQ3Blg-b5XBv5rFxcQMY",
      authDomain: "kwitter-sim.firebaseapp.com",
      databaseURL: "https://kwitter-sim-default-rtdb.firebaseio.com",
      projectId: "kwitter-sim",
      storageBucket: "kwitter-sim.appspot.com",
      messagingSenderId: "876046692462",
      appId: "1:876046692462:web:602dcd04e6ef438276b67f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML= "Welcome " + user_name + " !";

function addRoom() {
      roomname= document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "adding roomname"
      });
   localStorage.setItem("room_name", roomname);
   window.location= "kwitter_page.html";
   document.getElementById("room_name").value="";

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Roomname - " + Room_names);
                 row= "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
                 document.getElementById("output").innerHTML += row;
                  });});
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html";
}

function logout() {
     localStorage.removeItem("user_name");
     localStorage.removeItem("room_name");
     window.location= "index.html";
}