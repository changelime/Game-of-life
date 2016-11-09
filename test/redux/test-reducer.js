var expect = require("chai").expect;
var actions = require("../../js/redux/actions/index.js");
var reducer = require("../../js/redux/reducers/cellsReducer.js").default;

describe("cellsReducer test", function() {
    let defaultState = {
        size: {
            col: 5,
            row: 5
        },
        cells: [],
        livesCells: []
    };
    it("Input a empty action return default state", function() {
        let newState = reducer(defaultState, {});
        expect(newState).to.eql(Object.assign({}, defaultState));
	});
    it("Input a SET_SIZE action and return a new state", function() {
        let size = {
            col: 50,
            row: 50
        }
        let newState = reducer(defaultState, actions.setSize(size));
        expect(newState).to.eql(Object.assign({}, defaultState, {
            size: size
        }));
	});
    it("Input a SET_CELLS action and return a new state", function() {
        let cells = [
			1,  2,  3,  4,  5,
			6,  7,  8,  9,  10,
			11, 12, 13, 14, 15,
			16, 17, 18, 19, 20,
			21, 22, 23, 24, 25
		];
        let newState = reducer(defaultState, actions.setCells(cells));
        expect(newState).to.eql(Object.assign({}, defaultState, {
            cells: cells
        }));
	});
});