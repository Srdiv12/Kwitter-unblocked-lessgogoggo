
var firebaseConfig = {
      apiKey: "AIzaSyA2cQWB5l7BmSI8s6ms4-6MvGNvpK7yyT8",
      authDomain: "bkmkkkkkk.firebaseapp.com",
      databaseURL: "https://bkmkkkkkk-default-rtdb.firebaseio.com",
      projectId: "bkmkkkkkk",
      storageBucket: "bkmkkkkkk.appspot.com",
      messagingSenderId: "917624993337",
      appId: "1:917624993337:web:15311f591ca650bd363fe8",
      measurementId: "G-F2M29GL2FD"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

    

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
     
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html"
}