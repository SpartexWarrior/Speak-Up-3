const firebaseConfig = {
  apiKey: "AIzaSyBkC2nSPgRlIBCNCnPVsiQZsTmSzXZW6u8",
  authDomain: "speak-up-d0721.firebaseapp.com",
  databaseURL: "https://speak-up-d0721-default-rtdb.firebaseio.com",
  projectId: "speak-up-d0721",
  storageBucket: "speak-up-d0721.appspot.com",
  messagingSenderId: "1017200203075",
  appId: "1:1017200203075:web:ed0892a52afc6ab2f80bf6",
  measurementId: "G-86Z7NS1E6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
           firebase.database().ref("/").child(room_name).update
           ({purpose: "adding room name"});
           localStorage.setItem("room_name",room_name);
        
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names);
    row+"<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"<?div><hr>";
    document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="kwitter.html";
}
