// Initialize Firebase (replace with your Firebase config)
var firebaseConfig = {
  apiKey: "AIzaSyC21NRWVplPWxq2v2tRVnbNmmzF8ImNDrU",
  authDomain: "upload-334a2.firebaseapp.com",
  databaseURL: "https://upload-334a2-default-rtdb.firebaseio.com",
  projectId: "upload-334a2",
  storageBucket: "upload-334a2.appspot.com",
  messagingSenderId: "949959553767",
  appId: "1:949959553767:web:2c73a68949e9f832a82842",
  measurementId: "G-NGVM67Q1SW"
  };

firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service
var storage = firebase.storage();

function uploadImage() {
    var imageInput = document.getElementById("image-input");
    var uploadedImage = document.getElementById("uploaded-image");

    var file = imageInput.files[0];
    var storageRef = storage.ref('images/' + file.name);

    var uploadTask = storageRef.put(file);

    uploadTask.on('state_changed', null,
        function(error) {
            console.error('Error uploading image:', error);
        },
        function() {
            // Image uploaded successfully
            storageRef.getDownloadURL().then(function(url) {
                uploadedImage.src = url;
            });
        }
    );
}
