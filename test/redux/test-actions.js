var expect = require("chai").expect;
var actions = require("../../js/redux/actions/index.js");
describe("Create actions test", function() {
    it("Function getAction return a default SET_SIZE action object", function() {
        let action = actions.getAction(actions.SET_SIZE);
        expect(action).to.eql(Object.assign({}, actions.SET_SIZE, {
            payload: {
                size: {
                    row: 0,
                    col: 0
                }
            }
        }));
	});
	it("Function getAction return a SET_SIZE action object", function() {
        let size = {
            row: 5,
            col: 5
        };
        let action = actions.getAction(actions.SET_SIZE, {
            size: size
        });
        expect(action).to.eql(Object.assign({}, actions.SET_SIZE, {
            payload: {
                size: size
            }
        }));
	});
    it("Function setSize return a SET_SIZE action object", function() {
        let size = {
            row: 5,
            col: 5
        };
        let action = actions.setSize(size);
        expect(action).to.eql(Object.assign({}, actions.SET_SIZE, {
            payload: {
                size: size
            }
        }));
	});
    it("Function setCells return a SET_CELLS action object", function() {
        let cells = [
			1,  2,  3,  4,  5,
			6,  7,  8,  9,  10,
			11, 12, 13, 14, 15,
			16, 17, 18, 19, 20,
			21, 22, 23, 24, 25
		];
        let action = actions.setCells(cells);
        expect(action).to.eql(Object.assign({}, actions.SET_CELLS, {
            payload: {
                cells: cells
            }
        }));
	});
});