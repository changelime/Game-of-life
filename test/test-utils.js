var utils = require("../js/utils/utils");
var cellStatus = require("../js/utils/cell-status");
var expect = require("chai").expect;

const STATUS_DIE = cellStatus.STATUS_DIE;
const STATUS_LIVE = cellStatus.STATUS_LIVE;
describe("getElementByCoor test", function() {
	var arr = [
			1,  2,  3,  4,  5,
			6,  7,  8,  9,  10,
			11, 12, 13, 14, 15,
			16, 17, 18, 19, 20,
			21, 22, 23, 24, 25
		];
	var size = {
			row: 5,
			col: 5
		};
	it("Both x and y in the coordinate boundary", function() {
		var el = utils.getElementByCoor(arr, 2, 3, size);
		expect(el).to.equal(18);
	});
	it("X out of coordinate boundary", function() {
		var el = utils.getElementByCoor(arr, 6, 3, size);
		expect(el).to.equal(null);
	});
	it("Y out of coordinate boundary", function() {
		var el = utils.getElementByCoor(arr, 2, 7, size);
		expect(el).to.equal(null);
	});
	it("Both x and y out of coordinate boundary", function() {
		var el = utils.getElementByCoor(arr, 7, 7, size);
		expect(el).to.equal(null);
	});
});
describe("createCells test", function() {
	var size = {
			row: 5,
			col: 5
		};
	it("Return a right size array", function() {
		let arr = utils.createCells(size);
		expect(arr).to.have.lengthOf(size.row * size.col);
	});
});

describe("nextStepOfcells test", function() {
	var size = {
			row: 6,
			col: 6
		};
	
	it("Return a right array( Pattern Beacon (period 1 of 2) )", function() {
		var originalCells = [
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
				STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
				STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE,
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE,
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE
		];
		var nextCells = [
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
				STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
				STATUS_DIE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_DIE,
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE,
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE
		];
		let cells = utils.nextStepOfcells(originalCells, size);
		expect(cells).to.eql(nextCells);
	});
	it("Return a right array( Pattern Beacon (period 2 of 2) )", function() {
		var originalCells = [
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
				STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
				STATUS_DIE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_DIE,
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE,
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE
		];
		var nextCells = [
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
				STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
				STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE,
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE,
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE
		];
		let cells = utils.nextStepOfcells(originalCells, size);
		expect(cells).to.eql(nextCells);
	});
});