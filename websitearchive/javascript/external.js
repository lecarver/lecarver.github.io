var webmaps =
[
  ["COVID-19 Oral Hxtories of Tenant Resistance & Eviction Information",
  "https://covid19.antievictionmap.com/eviction-stories",
  "This web map by the Anti-Eviction Mapping Projectassesses housing protection legislation during the pandemic globally. This project also has a crowd-sourced data component to it because it asks users to share their own stories related to housing during the pandemic. The map is fairly intuitive to use and offers a very interactive experience since it combines categorical GIS data with qualitative text and videos about housing justice in different areas."
  ],
  ["Eye of Stormers",
  "https://spotify---bastille.appspot.com/",
  "This is a super unique web map is a project by the band, Bastille, that accompanied the release of the Wild World album. This interactive map allows you to see and explore cities where the band's music is being streamed the most. When you select a city, you can see the number of streams as well as the top 5 tracks. In addition, this web map also contains a time series, allowing you to see the streams over time."
  ]
];

function area_calculator(){
  var length = document.getElementById('length').value;
  var height = document.getElementById('height').value;
  var area = length * height;
  document.getElementById('area_result').textContent = area;
}
//HW4
function welcome(){
  let a = "Please enter your name.";
  let b = "Type your name here.";

//prompt box
user_name = window.prompt(a, b);
message = "<hi>Hello, welcome to my webpage, "+ user_name + "!</h1>";

return message;
}

function webmap_table(){
  document.write("<table id = 'webmap_reviews' width = 100%>");
  for(var row = 0; row < webmaps.length; row++){
    if (row < 1) {
      document.write("<tr style='background-color:#D6C89F;'>")
    } else {
      document.write("<tr style='background-color:#896565;'>")
    }
    for(var column = 0; column < webmaps[0].length; column++){
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}

//When the user clicks on the button to toggle the dropdown content
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks anywhere outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//HW 3
// name = window.prompt("Please enter your name");
// document.write(name);


//TASK 2
//window.alert(5 + 6);
//window.alert('5 + 6');
//document.write("<h1>A heading</h1>");
//document.write("<p>A sentence.</p>");

//TASK 3
//const x = "web";
//const y = "mapping";
//const out = x + y;
//document.write(out);
//A prompt box is used to prompt users to input a value before entering a page.
// user_name = window.prompt("Please enter your name", "Type your name here");
// document.write(user_name);
//
// //There are many ways to use the feature prompt
// sign = window.prompt(); //opens blank prompt
// sign = prompt(); //opens blank prompt
// sign = window.prompt("Are you feeling lucky"); //open prompt with this text
// sign = window.prompt("Are you feeling lucky", "sure"); //open the window with the text & default value.

//TASK 4
// x = 22;
// const y = 33;
// document.writeln(x + y);
// document.writeln("<br>");
// document.writeln(x += 33);
// //If we make x a constant variable, it cannot be reassigned so the last operator would not work.

//TASK 5
// document.writeln("<button onclick = 'condition()')>Conditional Test</button>")
// function condition() {
//     x = confirm("Are you sure you want to proceed?");
//     if(x) {
//       document.writeln("You chose Okay!");
//     } else {
//       document.writeln("You chose Cancel!");
//     }
// }

//TASK 6
// arr = ["Joe", "April", "Mark", "Sara"];
// for (var i = 0; i < arr.length; i++) {
//   document.writeln(arr[i], "<br>");
// }
