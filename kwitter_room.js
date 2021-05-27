
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyA6CkfQYm4H5Pn0E2ZB82kJnrLUD-LWyrc",
      authDomain: "kwitter-webapp-d4c4c.firebaseapp.com",
      projectId: "kwitter-webapp-d4c4c",
      storageBucket: "kwitter-webapp-d4c4c.appspot.com",
      messagingSenderId: "236897556450",
      appId: "1:236897556450:web:5e72040c4a16cacdf18bbb"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      
      //End code
      });});}
getData();
