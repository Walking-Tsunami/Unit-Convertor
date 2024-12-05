// Formula for meter to cm

document.getElementById("Btn").addEventListener("click", Convert);

function Convert() {
  // selected units from the dropdowns
  var fromUnit = document.getElementById("from-unit").value;
  var toUnit = document.getElementById("to-unit").value;
  var input = document.getElementById("input").value;
  var error = document.getElementById("error");
  var distanceMeters = 0;

  if (input == "") {
    // message if nothing is entered
    error.innerHTML = "* Please enter a number";
    return;
  }
  error.innerHTML = "";
  if (fromUnit === "Inches") {
    distanceMeters = input / 39.37;
  } else if (fromUnit === "Millimeter") {
    distanceMeters = input / 1000;
  } else if (fromUnit === "meter") {
    // convert input into meter
    distanceMeters = input;
    //   already in meter
  } else if (fromUnit === "Centimeter") {
    distanceMeters = input * 0.01;
  } else if (fromUnit === "kilometer") {
    distanceMeters = input * 1000;
    console.log(distanceMeters);
  } else if (fromUnit === "feet") {
    distanceMeters = input * 0.3048;
  } else if (fromUnit === "Yard") {
    distanceMeters = input / 1.094;

    // Prevent any errors if none of the above is applicable for some reason
  } else {
    return;
  }

  var convertedDistance = 0;
  if (toUnit === "Inches") {
    convertedDistance = distanceMeters * 39.37;
    document.getElementById("Units").innerHTML = "in";
  } else if (toUnit === "Millimeter") {
    convertedDistance = distanceMeters * 1000;
    document.getElementById("Units").innerHTML = "mm";
  } else if (toUnit === "Centimeter") {
    convertedDistance = distanceMeters * 100;

    document.getElementById("Units").innerHTML = "cm";
  } else if (toUnit === "meter") {
    convertedDistance = distanceMeters;

    document.getElementById("Units").innerHTML = "m";
  } else if (toUnit === "kilometer") {
    convertedDistance = distanceMeters / 1000;

    document.getElementById("Units").innerHTML = "km";
  } else if (toUnit === "feet") {
    convertedDistance = distanceMeters / 0.3048;
    console.log(convertedDistance);

    document.getElementById("Units").innerHTML = "ft";
  } else if (toUnit === "Yard") {
    convertedDistance = distanceMeters * 1.094;

    document.getElementById("Units").innerHTML = "yd";
  }

  // if (Answer === Math.floor(Answer)) {
  //   Answer = Answer;
  // } else {
  //   Answer = Answer.toFixed(2);
  // }
  // }   else if(Answer = Answer.toFixed(3)){
  //     Answer = Answer
  // }   else if(Answer > Answer.toFixed(4)){
  //     Answer = Answer.toFixed(3)
  // }

  document.getElementById("output").innerHTML = convertedDistance;
}

document.getElementById("light-mode").addEventListener("click", lightMode);
document.getElementById("dark-mode").addEventListener("click", darkMode);

var lightMode = document.getElementById("light-mode");
var darkMode = document.getElementById("dark-mode");
var input = document.getElementById("input");
var fromUnit2 = document.getElementById("from-unit");
var body = document.getElementById("body");
var html = document.getElementById("html");
var toUnit2 = document.getElementById("to-unit");
var button = document.getElementById("Btn");
function darkMode() {
  // Change to Dark Mode
  html.style.backgroundImage =
    "linear-gradient(to right, #333333, #444444, #555555, #666666, #777777)";
  body.style.backgroundColor = "#333"; // Dark background
  body.style.color = "#f1f1f1"; // Light text color

  // Dark mode styles for input and dropdown
  input.style.backgroundColor = "#444"; // Dark background for input
  input.style.color = "#f1f1f1"; // Text color in input
  input.style.borderColor = "#666"; // Light border for input

  // Dark mode styles for dropdowns
  fromUnit2.style.backgroundColor = "#444";
  fromUnit2.style.color = "#f1f1f1";
  fromUnit2.style.borderColor = "#666";

  toUnit2.style.backgroundColor = "#444";
  toUnit2.style.color = "#f1f1f1";
  toUnit2.style.borderColor = "#666";

  // Button and other elements
  button.style.backgroundColor = "#555"; // Dark button
  button.style.color = "#f1f1f1";
  button.style.borderColor = "#555";

  lightMode.style.backgroundColor = "#888";
  lightMode.style.color = "#f1f1f1";
  darkMode.style.backgroundColor = "#888";
  darkMode.style.color = "#f1f1f1";

  // Error color for dark mode
  document.getElementById("error").style.color = "#f1f1f1";

  // Output text color
  document.getElementById("output").style.color = "#38a3a5";

  // Units color for dark mode

  document.getElementById("Units").style.color = "#57cc99";
}

function lightMode() {
  // Change to Light Mode
  html.style.backgroundImage =
    "linear-gradient(to right, #22577b, #38a3a5, #57cc99, #80ed99, #c7f9cc)";
  body.style.backgroundColor = "white";
  body.style.opacity = "0.8";
  body.style.color = "#22577b"; // Text color

  // Light mode styles for input and dropdown
  input.style.backgroundColor = "#ffffff"; // White background for input
  input.style.color = "#22577b"; // Text color in input
  input.style.borderColor = "#57cc99"; // Green border for input

  // Light mode styles for dropdowns
  fromUnit2.style.backgroundColor = "#fff";
  fromUnit2.style.color = "black";
  fromUnit2.style.borderColor = "#57cc99";

  toUnit2.style.backgroundColor = "#fff";
  toUnit2.style.color = "black";
  toUnit2.style.borderColor = "#57cc99";

  // Button and other elements
  button.style.backgroundColor = "#22577b";
  button.style.color = "white";
  button.style.borderColor = "#22577b";

  lightMode.style.backgroundColor = "#57cc99";
  lightMode.style.color = "#22577b";
  darkMode.style.backgroundColor = "#57cc99";
  darkMode.style.color = "#22577b";

  document.getElementById("error").style.color = "red"; // Error color for light mode
  document.getElementById("output").style.color = "#38a3a5"; // Output text color
  document.getElementById("Units").style.color = "#57cc99"; // Units color for light mode
}

// I figured out how to fix the the issue that occurs with large numbers and expontents.
