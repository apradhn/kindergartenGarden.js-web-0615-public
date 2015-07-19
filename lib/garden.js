'use strict';
function Garden(crops, students) {
  this.students = students;
  this.crops = crops;

  var i;
  var row;
  var _this = this;


  lowerCaseStudents(students.sort());

  transformCrops(_this);

  convertCrops(_this);
  
  // iterates through rows of crops and assign crops to students
  for (i = 0; i < this.crops.length; i++) {
    row = this.crops[i];
    iterateCrops(row, _this);
  };
}


function lowerCaseStudents(students) {
  for (var i = 0; i < students.length; i++) {
    students[i] = students[i].toLowerCase();
  }
}

function convertCrops(garden) {
  var crop;

  for (var i = 0; i < garden.crops.length; i++) {
    for (var j = 0; j < garden.crops[i].length; j++) {
      crop = garden.crops[i][j];
      garden.crops[i][j] = crop.replace(/C/, 'clover')
        .replace(/R/, 'radishes')
        .replace(/G/, 'grass')
        .replace(/V/, 'violets');
    };
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

function iterateCrops(row, garden) {
  var students = garden.students;
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


