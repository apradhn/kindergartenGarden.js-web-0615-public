'use strict';
function Garden(crops, students) {
  this.students = students;
  this.crops = crops;

  var _this = this;

  // convert lowercase 
  formatStudents(_this)

  // convert crops into multidimensional array
  transformCrops(_this);

  // convert crop letters to crop names
  convertCrops(_this);
  
  // iterate through rows of crops and assign them to students
  iterateRows(_this);

}


function formatStudents(garden) {
  var students = garden.students;

  garden.students = students.sort();
  lowerCaseStudents(garden);
}

function lowerCaseStudents(garden) {
  var student;

  for (var i = 0; i < garden.students.length; i++) {
    student = garden.students[i]
    garden.students[i] = student.toLowerCase();
  };
}

function transformCrops(garden) {
  var rows = garden.crops.split("\n");
  var row;
  var letters;

  garden.crops = [];

  for (var i = 0; i < rows.length; i++) {
    row = rows[i];
    letters = row.split('');
    garden.crops.push(letters);
  };
}

function convertCrops(garden) {
  var crop;
  var replacement;

  for (var i = 0; i < garden.crops.length; i++) {
    for (var j = 0; j < garden.crops[i].length; j++) {
      crop = garden.crops[i][j];
      replacement = replaceCrop(crop);
      garden.crops[i][j] = replacement;
    };
  };
}

function replaceCrop(crop) {
  return crop.replace(/C/, 'clover')
        .replace(/R/, 'radishes')
        .replace(/G/, 'grass')
        .replace(/V/, 'violets');
}


function iterateRows(garden) {
  var row;

  for (var i = 0; i < garden.crops.length; i++) {
    row = garden.crops[i];
    iterateCrops(row, garden);
  };  
}

function iterateCrops(row, garden) {
  var patchSize = row.length / garden.students.length;
  var patch;
  var student;
  var firstCrop = 0;

  for (var i = 0; i < garden.students.length; i++) {
    student = garden.students[i];
    patch = row.slice(firstCrop, firstCrop + patchSize);
    firstCrop += patchSize;
    assignPatch(patch, student, garden);
  };
}

function assignPatch(patch, student, garden) {
  var crop;
  var studentHasArray;

  for (var i = 0; i < patch.length; i++) {
    crop = patch[i];
    studentHasArray = Boolean(garden[student]);
    if (!studentHasArray) garden[student] = [];
    garden[student].push(crop);
  };
}


