var expect = require("chai").expect;
var NumberButton = require("../../js/components/number-button").default;
var TestUtils = require("react-addons-test-utils");
var ReactDOM = require("react-dom");
var React = require("react");
var sinon = require("sinon");
describe("Number Button test", function() {
	it("Return the right labels", function() {
		let defaultButtonLabel = "button...";
		let defaultFrontLabel = "Go to";
		let defaultEndLabel = "steps";
		let button = TestUtils.renderIntoDocument(
			<NumberButton
				frontLabel={defaultFrontLabel}
				endLabel={defaultEndLabel}
				min={50}
				onClick={()=>{}}  label={defaultButtonLabel} />

		);
		let frontLabel = ReactDOM.findDOMNode(button).children[0].innerText;
		let endLabel = ReactDOM.findDOMNode(button).children[2].innerText;
		let buttonLabel = ReactDOM.findDOMNode(button).children[3].innerText;
		expect(frontLabel).to.eql(defaultFrontLabel);
		expect(endLabel).to.eql(defaultEndLabel);
		expect(buttonLabel).to.eql(defaultButtonLabel);
	});

});

