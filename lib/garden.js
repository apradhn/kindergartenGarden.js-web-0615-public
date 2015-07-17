'use strict';
function Garden(crops, students) {
  students = students.map(function(student) { return student.toLowerCase()});
  // Sets student properties
  setStudents(students, this);
  // transform crops string into multidimensional array of letters
  crops = transformCrops(crops);
  // Converts letters to crop names
  crops = convertLettersToCrops(crops)
  // assign Crops to students
  for (var i = 0; i < crops.length; i++) {
    var row = crops[i]
    assignCrops(students, row, this);
  };
}

function convertLettersToCrops(crops) {
  var convertedCrops = [];
  for (var i = 0; i < crops.length; i++) {
    var tempRow = [];
    var row = crops[i]
    for (var j = 0; j < row.length; j++) {
      var letter = row[j]
      switch(letter){
        case "C":
          tempRow.push("clover");
          break;
        case "V":
          tempRow.push("violets");
          break;
        case "R": 
          tempRow.push("radishes");
          break;
        case "G":
          tempRow.push("grass");
          break;
        default:
          tempRow.push("Uh Oh");
          break;
      }
    };
    convertedCrops.push(tempRow);
  };
  console.log(convertedCrops);
  return convertedCrops;
}

function transformCrops(crops) {
  var rows = crops.split("\n").map(function(row) {
    return row.split("");
  })
  return rows;
}

function setStudents(students, garden) {
  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    garden[student] = [];
  }
}

function assignCrops(students, row, garden) {

  var patchSize = row.length / students.length;

  for (var i = 0; i < students.length; i++) {
    var patch = row.slice(i, i + patchSize);
    var student = students[i];
    garden[student].push(patch);
    // Flatten this array and your home free! //
  };
}



