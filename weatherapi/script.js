var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');
var weatherIcon = document.querySelector('.weatherIcon');



button.addEventListener('click', function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=d3ff85bae5a34194e9c200893b3dcdf1&units=Imperial')
        .then(response => response.json())
        .then(data => {



            //   history.push(searchValue);
            //   window.localStorage.setItem("history", JSON.stringify(history));
            // }
            // //clear any old content
            // $("#today").empty();

            // function makeRow(text) {
            //   var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
            //   $(".history").append(li);
            // }


            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var descValue = data['weather'][0]['description'];
            var weatherIconValue = data['weather'][0]['icon'];


            main.innerHTML = nameValue;
            desc.innerHTML = "Description - " + descValue;
            temp.innerHTML = "Temperature - " + tempValue;
            weatherIcon.innerHTML = weatherIconValue;
            input.value = "";

        })

        //function getForecast (searchValue) {
        //    $.ajax({
        //      type: "GET"
        //      //open weather url
        //      url: "api.openweathermap.org/data/2.5/forecast?q="+ searchValue+ "&appid=d3ff85bae5a34194e9c200893b3dcdf1=imperial"
        //      datatype: "json",
        //      success: function(data) {
        //        &("#forecast").html("<h4 class=\'mt-3\'>5-Day Forecast:</h4>").append(<"div class=\'row\'>");

        //      }

        .catch(err => alert("Please enter another city name!"));
})

// var input = document.querySelector('.input_text');
// var main = document.querySelector('#name');
// var temp = document.querySelector('.temp');
// var desc = document.querySelector('.desc');
// var clouds = document.querySelector('.clouds');
// var button= document.querySelector('.submit');


// button.addEventListener('click', function(name){
// fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
// .then(response => response.json())
// .then(data => {
//   var tempValue = data['main']['temp'];
//   var nameValue = data['name'];
//   var descValue = data['weather'][0]['description'];

//   main.innerHTML = nameValue;
//   desc.innerHTML = "Desc - "+descValue;
//   temp.innerHTML = "Temp - "+tempValue;
//   input.value ="";

// })

// .catch(err => alert("Wrong city name!"));
// })