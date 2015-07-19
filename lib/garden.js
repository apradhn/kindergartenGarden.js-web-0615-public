'use strict';
function Garden(crops, students) {

  var i;
  var row;
  var _this = this;

  // lower cases student names
  sortStudents(students);
  // Sets student properties
  initializeStudents(students, _this);
  // transform crops string into multidimensional array of letters
  crops = transformCrops(crops);
  // Converts letters to crop names
  crops = convertLettersToCrops(crops);
  // iterates through rows of crops
  for (i = 0; i < crops.length; i++) {
    row = crops[i];
    assignCrops(students, row, _this);
  };
}

function initializeStudents(students, garden) {
  var student;
  for (var i = 0; i < students.length; i++) {
    student = students[i];
    garden[student] = [];
  }
}

function sortStudents(students) {
  lowerCaseStudents(students);
  alphabetizeStudents(students);
}

function alphabetizeStudents(students) {
  students = students.sort();
}

function lowerCaseStudents(students) {
  for (var i = 0; i < students.length; i++) {
    students[i] = students[i].toLowerCase();
  }
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
  });
  return rows;
}



function assignCrops(students, row, garden) {
  var patchSize = row.length / students.length;
  var patch;
  var student;
  var firstCrop = 0;


  for (var i = 0; i < students.length; i++) {

    student = students[i];
    patch = row.slice(firstCrop, firstCrop + patchSize);
    firstCrop += patchSize;
    assignPatch(patch, student, garden);
  };
}

function assignPatch(patch, student, garden) {
  var crop;
  for (var i = 0; i < patch.length; i++) {
    crop = patch[i];
    garden[student].push(crop);
  };
}


