import React from 'react'
// import {connect} from 'react-redux'
// import {FormattedMessage} from 'react-intl'

export class SongView extends React.Component {
    componentWillMount() {
        console.log('fetching song', this.props.params.id)
        this.props.fetch_song(this.props.params.id)
    }
    render() {
        return (
            <div className="song-view">
                <p>Hello from SongView</p>
                <p>{this.props.is_fetching ? 'Fetching' : 'Done'}</p>
                <p>{this.props.song ? this.props.song.title : '---'}</p>
            </div>
        )
    }
}
