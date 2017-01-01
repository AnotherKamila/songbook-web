import React from 'react'
import {CircularProgress} from 'material-ui'

export class FetchDataView extends React.Component {
    componentWillMount() {
        this.props.fetch(this.props.url)
    }

    componentWillReceiveProps(new_props) {
        if (new_props.url != this.props.url) this.props.fetch(new_props.url)
    }

    render() {
        const Component = this.props.component
        if (this.props.is_fetching) {
            return <CircularProgress />
        }
        if (this.props.error) {
            return <span className='error'>Error: {this.props.error}</span>
        }
        return <Component data={this.props.data} {...this.props} />
    }
}
FetchDataView.propTypes = {
    url: React.PropTypes.string.isRequired,
    is_fetching: React.PropTypes.bool.isRequired,
    data: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
}
