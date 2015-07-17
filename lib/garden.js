'use strict';
function Garden(crops, students) {
  // crops is an array like ["RC\nGG"]
  // students is an array of student names
  var rows = crops.split("\n");
  var rowSize = rows[0].length;
  var cellWidth = rowSize / students.length;
  var cellsPerRow = rowSize / cellWidth;
  var cells = []

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    for (var j = 0; j < row.length; j += cellWidth) {
      var cell;
      cell = row.slice(j, j + cellWidth);
    }
  }
  console.log(students);
  console.log(crops);
  console.log(cellWidth);
  console.log(cellsPerRow);

  // Sets student properties
  for (var i = 0; i < students.length; i++) {
    var student = students[i].toLowerCase();
    this[student] = "";
  }
  // for (var i = 0; i < students.length; i++) {
  //   Object.defineProperty(this, students[i].toLowerCase(), { 
  //     configurable: true, 
  //     enumerable: true,
  //     writable: true,
  //     value: "",
  //   });    
  // }  

  // assigns crops to students
  for (var i = 0; i < rows.length; i++) {
    var letters = rows[i];
    for (var j = 0; j < letters.length; j++) {
      var keys = Object.keys(this);
      var student = keys[j];
      this[student] += letters.slice(j, j + cellWidth);
    }
  }

  // converts letters to crop names
  for (var i = 0; i < students.length; i++) {
    var student = students[i].toLowerCase();
    var crop = this[student];
    var conversions = []
    for (var j = 0; j < crop.length; j++) {
      switch(crop[j]) {
        case "V":
          conversions.push("violets");
          break;
        case "G":
          conversions.push("grass");
          break;
        case "C":
          conversions.push("clover");
          break;
        case "R":
          conversions.push("radishes");
          break;
        default: 
          conversions.push("uh oh");
          break;
      }
    }
    this[student] = conversions;
  }
}


// Garden.prototype.convertCrop = function(crops) {
//   var conversion = [];
//   var letters = crops.split("");
//   for (var i = 0; i < 0; i++) {
//     var letter = letters[i];
//     console.log(letter);
//   }
//   return conversion;
// }




