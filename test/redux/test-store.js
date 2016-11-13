var expect = require("chai").expect;
var createStore = require("redux").createStore;
var cellStatus = require("../../js/utils/cell-status");
var reducer = require("../../js/redux/reducers/cellsReducer.js").default;
var actions = require("../../js/redux/actions/index.js");
const STATUS_DIE = cellStatus.STATUS_DIE;
const STATUS_LIVE = cellStatus.STATUS_LIVE;
describe("Store test", function() {
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
    it("Dispatch a SET_SIZE action and return a new state", function() {
        let store = createStore(reducer, defaultState);
        let size = {
            col: 5,
            row: 5
        };
        store.dispatch(actions.setSize(size));
        let newState = store.getState();
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
    it("Dispatch a SET_CELLS action and return a new state", function() {
        let store = createStore(reducer, defaultState);
        let cells = [
				STATUS_LIVE, STATUS_LIVE, STATUS_DIE, STATUS_DIE, 
				STATUS_LIVE, STATUS_DIE, STATUS_DIE, STATUS_DIE, 
				STATUS_DIE, STATUS_DIE, STATUS_DIE, STATUS_LIVE, 
				STATUS_DIE, STATUS_DIE, STATUS_LIVE, STATUS_LIVE
		];
        store.dispatch(actions.setCells(cells));
        let newState = store.getState();
        expect(newState).to.eql(Object.assign({}, defaultState, {
            cells: cells
        }));
	});
});