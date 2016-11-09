var utils = require("../js/utils/utils");
var cellStatus = require("../js/utils/cell-status");
var expect = require("chai").expect;

const STATUS_DIE = cellStatus.STATUS_DIE;
const STATUS_LIVE = cellStatus.STATUS_LIVE;
describe("getElementByCoor test", function() {
	let arr = [
			1,  2,  3,  4,  5,
			6,  7,  8,  9,  10,
			11, 12, 13, 14, 15,
			16, 17, 18, 19, 20,
			21, 22, 23, 24, 25
		];
	let size = {
			row: 5,
			col: 5
		};
	it("Both x and y in the coordinate boundary", function() {
		let el = utils.getElementByCoor(arr, 2, 3, size);
		expect(el).to.equal(18);
	});
	it("X out of coordinate boundary", function() {
		let el = utils.getElementByCoor(arr, 6, 3, size);
		expect(el).to.equal(null);
	});
	it("Y out of coordinate boundary", function() {
		let el = utils.getElementByCoor(arr, 2, 7, size);
		expect(el).to.equal(null);
	});
	it("Both x and y out of coordinate boundary", function() {
		let el = utils.getElementByCoor(arr, 7, 7, size);
		expect(el).to.equal(null);
	});
});
describe("createCells test", function() {
	let size = {
			row: 5,
			col: 5
		};
	it("Return a right size array", function() {
		let {cells} = utils.createCells(size);
		expect(cells).to.have.lengthOf(size.row * size.col);
	});
});

describe("nextStepOfcells test", function() {
	let size = {
			row: 4,
			col: 4
		};
	let original = {
		cells: [
				STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, 
				STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, 
				STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE, 
				STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE
		],
		livesCells: [
			{x: 0, y: 0},
			{x: 1, y: 0},
			{x: 0, y: 1},
			{x: 1, y: 1},
			{x: 2, y: 2},
			{x: 3, y: 2},
			{x: 2, y: 3},
			{x: 3, y: 3}
		]
	};
	let nextStep = {
		cells: [
				STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, 
				STATUS_LIVE, STATUS_DIE, STATUS_DIE, STATUS_DIE, 
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_LIVE, 
				STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE
		],
		livesCells: [
			{x: 0, y: 0},
			{x: 1, y: 0},
			{x: 0, y: 1},
			{x: 3, y: 2},
			{x: 2, y: 3},
			{x: 3, y: 3}
		]
	};
	it("Return a right array( Pattern Beacon (period 1 of 2) )", function() {		
		let cells = utils.nextStepOfcells(original.cells, original.livesCells, size);
		expect(cells).to.eql(nextStep);
	});
	it("Return a right array( Pattern Beacon (period 2 of 2) )", function() {
		let cells = utils.nextStepOfcells(nextStep.cells, nextStep.livesCells, size);
		expect(cells).to.eql(Object.assign({}, original, {
			livesCells: [
			{x: 0, y: 0},
			{x: 1, y: 1},
			{x: 1, y: 0},
			{x: 0, y: 1},
			{x: 3, y: 2},
			{x: 2, y: 2},
			{x: 2, y: 3},
			{x: 3, y: 3}
		]
		}));
	});
});