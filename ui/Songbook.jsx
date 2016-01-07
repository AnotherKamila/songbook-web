React = require("react");
require('./Songbook.sass');

var Songbook = React.createClass({
	render: function() {
		return (
			<div className="test">
				Hello, world! says the Songbook component
			</div>
		);
	}
});
module.exports = Songbook;
