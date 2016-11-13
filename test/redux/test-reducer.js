var expect = require("chai").expect;
var actions = require("../../js/redux/actions/index.js");
var reducer = require("../../js/redux/reducers/cellsReducer.js").default;
var cellStatus = require("../../js/utils/cell-status");
const STATUS_DIE = cellStatus.STATUS_DIE;
const STATUS_LIVE = cellStatus.STATUS_LIVE;
describe("cellsReducer test", function() {
    const defaultState = {
        size: {
            col: 4,
            row: 4
        },
        cells: [
				STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, 
				STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, 
				STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE, 
				STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE
		],
		livesCells: [0, 1, 4, 5, 10, 11, 14, 15]
    };
    it("Input a empty action return default state", function() {
        let newState = reducer(defaultState, {});
        expect(newState).to.eql(Object.assign({}, defaultState));
	});
    it("Input a SET_SIZE action and return a new state", function() {
        let size = {
            col: 5,
            row: 5
        };
        let newState = reducer(defaultState, actions.setSize(size));
        expect(newState).to.eql(Object.assign({}, defaultState, {
            size: size,
            cells: [
                    STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, STATUS_DIE, 
                    STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
                    STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE,
                    STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE, STATUS_DIE,
                    STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_DIE,
            ],
            livesCells: [0, 1, 5, 6, 12, 13, 17, 18]
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