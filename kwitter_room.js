var firebaseConfig = {
      apiKey: "AIzaSyD3D6IWk64MW7KRAZVMaM1UJkIgzTfRM24",
      authDomain: "kwitter-c74c4.firebaseapp.com",
      databaseURL: "https://kwitter-c74c4-default-rtdb.firebaseio.com",
      projectId: "kwitter-c74c4",
      storageBucket: "kwitter-c74c4.appspot.com",
      messagingSenderId: "605452902002",
      appId: "1:605452902002:web:c6f64aff3a661482b4eceb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name")

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redrictToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "Kwitter_Page.html";
}

function redrictToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Kwitter_Page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}