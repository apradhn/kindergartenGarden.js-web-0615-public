'use strict';
function Garden(crops, students) {


  var i;
  var row;
  var _this = this;

  // lower cases student names
  lowerCaseStudents(students.sort());

  // Sets student properties

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


function lowerCaseStudents(students) {
  for (var i = 0; i < students.length; i++) {
    students[i] = students[i].toLowerCase();
  }
}

function convertLettersToCrops(crops) {
  var convertedCrops = [];
  var tempRow; 
  var row;

  for (var i = 0; i < crops.length; i++) {
    tempRow = [];
    row = crops[i]
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
  var hasStudent;

  for (var i = 0; i < patch.length; i++) {
    crop = patch[i];
    hasStudent = Boolean(garden[student]);
    if (!hasStudent) garden[student] = [];
    garden[student].push(crop);
  };
}


