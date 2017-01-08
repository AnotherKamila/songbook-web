// window.Abc must be available.
//
// It is not part of the bundle because it has 'use strict' + incorrect JS;
// and therefore webpack completely refuses to bundle it. Argh.

import React from 'react'
import Measure from 'react-measure'

import './song.sass'

export class SongAbc extends React.Component {
    constructor(props) {
        super(props)
        this.svg = '' // NOT using state here, because it was eating some calls to setState...
        this.state = {}
    }

    add_svg_chunk = chunk => {
        this.svg += chunk
        this.setState({svg: this.svg})
    }

    rerender = () => {
        if (!this.state.width) return; // ...and call me in a while
        this.svg = ''
        let size=[ // why not :D
            '%%pagewidth '+(this.state.width),
            '%%leftmargin 0',
            '%%rightmargin 0',
        ].join('\n')
        new Abc({
            img_out: this.add_svg_chunk,
            errmsg: console.warn, // TODO
            read_file: fname => console.warn('Includes not supported (requested '+fname+')'), // TODO
        }).tosvg('[input]', size+'\n'+this.props.song)
    }

    componentDidUpdate(prev_props, prev_state) {
        if (prev_state.width != this.state.width) this.rerender()
        if (prev_props.song  != this.props.song)  this.rerender()
    }

    render() {
        return (
            <Measure onMeasure={({width}) => this.setState({width: width})} >
                {this.state.svg ?
                    <div className="song-abc" dangerouslySetInnerHTML={{__html: this.state.svg}} /> :
                    <div className="song-abc">Rendering...</div>
                }
            </Measure>
        )
    }
}

