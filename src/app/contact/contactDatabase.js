var firebaseConfig = {
  apiKey: "config.FIREBASE_CONTACT_FORM_DATABASE_KEY",
  authDomain: "the-irresoluteduck-collection.firebaseapp.com",
  databaseURL: "https://the-irresoluteduck-collection.firebaseio.com",
  projectId: "the-irresoluteduck-collection",
  storageBucket: "the-irresoluteduck-collection.appspot.com",
  messagingSenderId: "168730764623",
  appId: "1:168730764623:web:d935250d7b24629112d13a",
  measurementId: "G-749XWBEHWF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  console.log(123);

  var name = getInputVal('name');
  var email = getInputVal('email');
  var reason = getInputVal('reason');
  var message = getInputVal('message');

  saveMessage(name, email, reason, message);
}

function getInputVal(id){
  return document.getElementById(id).value;
}

function saveMessage(name, email, reason, message) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    reason: reason,
    message: message
  });
}

