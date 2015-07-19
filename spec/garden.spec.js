'use strict';

describe('Garden', function () {
  it('for Alice', function () {
    expect(new Garden('RC\nGG', ['Alice']).alice)
      .toEqual(['radishes', 'clover', 'grass', 'grass']);
  });

  it('another for Alice', function () {
    expect(new Garden('VC\nRC', ['Alice']).alice)
      .toEqual(['violets', 'clover', 'radishes', 'clover']);
  });

  it('for Bob', function () {
    expect(new Garden('VVCG\nVVRC', ['Alice', 'Bob']).bob)
      .toEqual(['clover', 'grass', 'radishes', 'clover']);
  });

  it('for Bob and Charlie', function () {
    var garden = new Garden('VVCCGG\nVVCCGG', ['Alice', 'Bob', 'Charlie']);
    expect(garden.bob).toEqual(['clover', 'clover', 'clover', 'clover']);
    expect(garden.charlie).toEqual(['grass', 'grass', 'grass', 'grass']);
  });

});

describe('Full garden', function () {
  var children = [
                'Alice',
                'Bob',
                'Charlie',
                'David',
                'Eve',
                'Fred',
                'Ginny',
                'Harriet',
                'Ileana',
                'Joseph',
                'Kincaid',
                'Larry'
              ];
  var diagram = 'VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV';
  var garden = new Garden(diagram, children);

  it('for Alice', function () {
    expect(garden.alice)
      .toEqual(['violets', 'radishes', 'violets', 'radishes']);
  });

  it('for Bob', function () {
    expect(garden.bob)
      .toEqual(['clover', 'grass', 'clover', 'clover']);
  });

  it('for Charlie', function () {
    expect(garden.charlie)
      .toEqual(['violets', 'violets', 'clover', 'grass']);
  });

  it('for David', function () {
    expect(garden.david)
      .toEqual(['radishes', 'violets', 'clover', 'radishes']);
  });

  it('for Eve', function () {
    expect(garden.eve)
      .toEqual(['clover', 'grass', 'radishes', 'grass']);
  });

  it('for Fred', function () {
    expect(garden.fred)
      .toEqual(['grass', 'clover', 'violets', 'clover']);
  });

  it('for Ginny', function () {
    expect(garden.ginny)
      .toEqual(['clover', 'grass', 'grass', 'clover']);
  });

  it('for Harriet', function () {
    expect(garden.harriet)
      .toEqual(['violets', 'radishes', 'radishes', 'violets']);
  });

  it('for Ileana', function () {
    expect(garden.ileana)
      .toEqual(['grass', 'clover', 'violets', 'clover']);
  });

  it('for Joseph', function () {
    expect(garden.joseph)
      .toEqual(['violets', 'clover', 'violets', 'grass']);
  });

  it('for Kincaid', function () {
    expect(garden.kincaid)
      .toEqual(['grass', 'clover', 'clover', 'grass']);
  });

  it('for Larry', function () {
    expect(garden.larry)
      .toEqual(['grass', 'violets', 'clover', 'violets']);
  });

});

describe('Disordered class', function () {
  var diagram = 'VCRRGVRG\nRVGCCGCV';
  var students = ['Samantha', 'Patricia', 'Xander', 'Roger'];
  var garden = new Garden(diagram, students);

  it('Patricia', function () {
    expect(garden.patricia)
      .toEqual(['violets', 'clover', 'radishes', 'violets']);
  });

  it('Roger', function () {
    expect(garden.roger)
      .toEqual(['radishes', 'radishes', 'grass', 'clover']);
  });

  it('Samantha', function () {
    expect(garden.samantha)
      .toEqual(['grass', 'violets', 'clover', 'grass']);
  });

  it('Xander', function () {
    expect(garden.xander)
      .toEqual(['radishes', 'grass', 'clover', 'violets']);
  });

});

describe('Two gardens, different students', function () {
  var diagram = 'VCRRGVRG\nRVGCCGCV';
  var garden1 = new Garden(diagram, ['Alice', 'Bob', 'Charlie', 'Dan']);
  var garden2 = new Garden(diagram, ['Bob', 'Charlie', 'Dan', 'Erin']);

  it('Bob and Charlie for each garden', function () {
    expect(garden1.bob)
      .toEqual(['radishes', 'radishes', 'grass', 'clover']);
    expect(garden2.bob)
      .toEqual(['violets', 'clover', 'radishes', 'violets']);
    expect(garden1.charlie)
      .toEqual(['grass', 'violets', 'clover', 'grass']);
    expect(garden2.charlie)
      .toEqual(['radishes', 'radishes', 'grass', 'clover']);
  });

});
