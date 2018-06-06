$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyB_zj9DDElFhcjBsnG5NUgLE5MmSzcz49E",
        authDomain: "trainschedule-7677d.firebaseapp.com",
        databaseURL: "https://trainschedule-7677d.firebaseio.com",
        projectId: "trainschedule-7677d",
        storageBucket: "",
        messagingSenderId: "521959198118"
    };
    firebase.initializeApp(config);

    var database = firebase.database();
    var trainName = "";
    var trainDestination = "";
    var trainStart = "";
    var trainFrequency = "";


    function sendUserInfo() {
        $(".submitButton").on("click", function (event) {
            event.preventDefault();

            trainName = $("#userTrainName").val().trim();
            trainDestination = $("#userDestination").val().trim();
            trainStart = $("#userFirstTrain").val().trim();
            trainFrequency = $("#userFrequency").val().trim();
            database.ref().push({
                trainName: trainName,
                trainDestination: trainDestination,
                trainStart: trainStart,
                trainFrequency: trainFrequency
            });

            $("#userTrainName").val("");
            $("#userDestination").val("");
            $("#userFirstTrain").val("");
            $("#userFrequency").val("");
        });
    }

    // function setNextArrival() {
    //     database.ref().on("child_added", function (snapshot) {
    //         trainStart = $("#userFirstTrain").val();
    //         console.log(trainStart);
    //         moment.hour().minute();
    //     });
    // }
    // setNextArrival();

    // function setMinutesAway() {
    //     database.ref().on("child_added", function (snapshot) {
    //         moment.minute();
    //     });
    // }

    function retrieveData() {
        database.ref().on("child_added", function (snapshot) {

            var tableRow = $("<tr>");
            var tableData = $("<td>");
            // var rowOne = $("#tableRowOne");
            // var rowTwo = $("#tableRowTwo");
            // var rowThree = $("#tableRowThree");
            // var rowFour = $("#tableRowFour");
            // var rowFive = $("#tableRowFive");
            var tableBody = $("#tableBody");

            // trainName = tableData.append(snapshot.val().trainName);
            // trainDestination = tableData.append(snapshot.val().trainDestination);
            // trainStart = tableData.append(snapshot.val().trainFrequency);
            // trainFrequency = tableData.append(snapshot.val().trainStart);


            // tableRow.append(trainName)
            //     .append(trainDestination)
            //     .append(trainStart)
            //     .append(trainFrequency);

            // tableBody.append(tableRow);
            // tableBody.append(trainDestination);

            $("#tableBody").append("<tr><td>" + snapshot.val().trainName + 
            "</td><td>" + snapshot.val().trainDestination + 
            "</td><td>" + snapshot.val().trainFrequency + 
            "</td><td>" + snapshot.val().trainStart + "</td></tr>");

            // setMinutesAway();
            // setNextArrival();
        });
    }


    sendUserInfo();
    retrieveData();
});