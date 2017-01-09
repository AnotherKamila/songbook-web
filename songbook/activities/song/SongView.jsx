import React from 'react'
import {DropDownMenu, MenuItem} from 'material-ui'
import {FormattedMessage as T} from 'react-intl'
import _ from 'lodash'

import {SongText} from './SongText.jsx'
import {SongAbc}  from './SongAbc.jsx'

const TONES = _.range(12, -13) // half-open :D
const Transpose = ({value, onChange}) => (
    <DropDownMenu value={value} onChange={(e, i, val) => onChange(val)} maxHeight={200}>
        {TONES.map(i => <MenuItem value={i}
                                  label={<T id='song.transpose' values={{n: i}}/>}
                                  primaryText={<T id='song.semitones' values={{
                                      n: i,
                                      sign: i>0 ? '+' : '',
                                      abs: Math.abs(i)
                                  }}/>}
                                  key={i} />
        )}
    </DropDownMenu>
)
Transpose.propTypes = {
    value: React.PropTypes.number,
    onChange: React.PropTypes.func,
}

export class SongView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {transpose: 0}
    }
    render() {
        let data = this.props.data
        return (
            <div className="content-wrapper">
                <div className='content padded song-view'>
                    <header>
                        <div className='song-transpose'>
                            <Transpose value={this.state.transpose}
                                       onChange={(val) => this.setState({transpose: val})} />
                        </div>

                        <h1>{data.title}</h1>
                        <h2>{data.artist}</h2>
                        <p className='song-comment'>{data.comment}</p>
                        <p className='song-link'><a title='Link' href={data.link}>{data.link}</a></p>
                    </header>
                    {data.abc  ? <SongAbc  abc={data.abc}   transpose={this.state.transpose}/> : null}
                    {data.text ? <SongText text={data.text} transpose={this.state.transpose}/> : null}
                </div>
            </div>
        )
    }
}
SongView.propTypes = {
    data: React.PropTypes.object.isRequired,
}
