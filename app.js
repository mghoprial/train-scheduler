$(document).ready(function () {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyD9B4HpovTErea96jdQoHEOhzTp6lKl2pc",
        authDomain: "goodtrain-56e51.firebaseapp.com",
        databaseURL: "https://goodtrain-56e51.firebaseio.com",
        projectId: "goodtrain-56e51",
        storageBucket: "",
        messagingSenderId: "899874546060",
        appId: "1:899874546060:web:93036e9f02ed2b71"
    };



    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    //below is the reference to our database
    var dataRef = firebase.database();
    $('#submitButton').on('click', function (event) {
        event.preventDefault();
        $('#articleResults').empty();

        let trainName = $('#trainName').val();
        console.log(trainName)
        let destination = $('#destination').val();
        console.log(destination)
        let firstTrain = $('#firstTrain').val();
        console.log(firstTrain)
        let frequency = $('#frequency').val();
        console.log(frequency)


        // Code for the push
        dataRef.ref().push({

            trainName: trainName,
            destination: destination,
            frequency: frequency,
            firstTrain: firstTrain,
        });
    });


    $('#clearButton').on('click', function (event) {
        event.preventDefault();
        $('#articleResults').empty();
    });
    dataRef.ref().on("child_added", function (childSnapshot) {
        console.log(childSnapshot);
        console.log(childSnapshot.val().trainName);
        console.log(childSnapshot.val().destination);
        console.log(childSnapshot.val().frequency);
        console.log(childSnapshot.val().firstTrain);
    });
});