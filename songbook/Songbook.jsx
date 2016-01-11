import React from "react"
import './Songbook.sass'

export class Songbook extends React.Component {
    propTypes: {
        api_url: React.PropTypes.string
    };

    render() {
        return (
            <div className="test">
                Hello World! from the Songbook component<br />
                API URL: {this.props.api_url}
            </div>
        )
    }
}

export default Songbook
