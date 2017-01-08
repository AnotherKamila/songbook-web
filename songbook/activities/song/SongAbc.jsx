// window.Abc must be available.
//
// It is not part of the bundle because it has 'use strict' + incorrect JS;
// and therefore webpack completely refuses to bundle it. Argh.

import React from 'react'
import {DropDownMenu, MenuItem} from 'material-ui'
import {FormattedMessage as T} from 'react-intl'
import Measure from 'react-measure'
import _ from 'lodash'

import './song.sass'

const TONES = _.range(12, -13) // half-open :D
const Transpose = ({value, onChange, intl}) => (
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

export class SongAbc extends React.Component {
    constructor(props) {
        super(props)
        this.svg = '' // NOT using state here, because it was eating some calls to setState...
        this.state = {transpose: 0}
    }

    add_svg_chunk = chunk => {
        this.svg += chunk
        this.setState({svg: this.svg})
    }

    rerender = () => {
        if (!this.state.width) return; // ...and call me in a while
        this.svg = ''
        let transpose = '%%transpose '+this.state.transpose // WHOA! :D
        let size=[ // why not :D
            '%%pagewidth '+(this.state.width),
            '%%leftmargin 0',
            '%%rightmargin 0',
        ].join('\n')
        new Abc({
            img_out: this.add_svg_chunk,
            errmsg: console.warn, // TODO
            read_file: fname => console.warn('Includes not supported (requested '+fname+')'), // TODO
        }).tosvg('[abc]', [transpose, size, this.props.song].join('\n'))
    }

    componentDidUpdate(prev_props, prev_state) {
        if (prev_state.width     != this.state.width ||
            prev_state.transpose != this.state.transpose ||
            prev_props.song      != this.props.song) this.rerender()
    }

    render() {
        let div = null
        if (!this.state.svg) {
            div = <div className="song-abc">Rendering...</div>
        } else {
            div = (
                <div className="song-abc">
                    <div className='song-transpose'>
                        <Transpose value={this.state.transpose}
                                         onChange={(val) => this.setState({transpose: val})} />
                    </div>
                    <div dangerouslySetInnerHTML={{__html: this.state.svg}} />
                </div>
            )
        }
        return (
            <Measure onMeasure={({width}) => this.setState({width: width})} >
                {div}
            </Measure>
        )
    }
}

