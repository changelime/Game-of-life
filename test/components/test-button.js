var expect = require("chai").expect;
var Button = require("../../js/components/button").default;
var TestUtils = require("react-addons-test-utils");
var ReactDOM = require("react-dom");
var React = require("react");
var sinon = require("sinon");
describe("Button test", function() {
	it("Return a right label", function() {
		let defaultLabel = "button...";
		let button = TestUtils.renderIntoDocument(
			<Button label={defaultLabel} />
		);
		let label = ReactDOM.findDOMNode(button).textContent;
		expect(label).to.eql(defaultLabel);
	});
	it("Click button twice", function() {
		let callback = sinon.spy();
		let button = TestUtils.renderIntoDocument(
			<Button onClick={callback}/>
		);
		let btnIns = TestUtils.findRenderedDOMComponentWithTag(button, "button");
		TestUtils.Simulate.click(btnIns);
		TestUtils.Simulate.click(btnIns);
		expect(callback.callCount).to.eql(2);
	});
});

