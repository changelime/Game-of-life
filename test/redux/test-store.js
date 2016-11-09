var expect = require("chai").expect;
var createStore = require("redux").createStore;
var reducer = require("../../js/redux/reducers/cellsReducer.js").default;
var actions = require("../../js/redux/actions/index.js");

describe("Store test", function() {
    const defaultState = {
        size: {
            col: 5,
            row: 5
        },
        cells: []
    };
    it("Dispatch a SET_SIZE action and return a new state", function() {
        let store = createStore(reducer, defaultState);
        let size = {
            col: 50,
            row: 50
        };
        store.dispatch(actions.setSize(size));
        let newState = store.getState();
        expect(newState).to.eql(Object.assign({}, defaultState, {
            size: size
        }));
	});
    it("Dispatch a SET_CELLS action and return a new state", function() {
        let store = createStore(reducer, defaultState);
        let cells = [
			1,  2,  3,  4,  5,
			6,  7,  8,  9,  10,
			11, 12, 13, 14, 15,
			16, 17, 18, 19, 20,
			21, 22, 23, 24, 25
		];
        store.dispatch(actions.setCells(cells));
        let newState = store.getState();
        expect(newState).to.eql(Object.assign({}, defaultState, {
            cells: cells
        }));
	});
});