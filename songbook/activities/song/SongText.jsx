import React from 'react'

import './song.sass'

const Chord = ({chord}) => <span className='chord'>{chord}</span>

const Stanza = ({stanza}) => {
    let chord_re    = RegExp(/<<[\w#+\/]+>>/g) // can't use capture because browsers...
    let chords      = stanza.match(chord_re) || []
    let text_pieces = stanza.split(chord_re) || []
    let res = []
    for (let i = 0; i < chords.length; ++i) {
        res.push(text_pieces[i])
        res.push(<Chord chord={chords[i].substring(2, chords[i].length-2)}
                        key={i} />)
    }
    res.push(text_pieces[text_pieces.length-1])
    return <p className='stanza' className={chords.length ? 'has-chords' : null}>{res}</p>
}

function parse_text(text) {
    // remove comments (marked by `#` at the beginning of line) and excess whitespace
    let cleaned = text.replace(/^#[^\n]*\n/gm, '').replace(/[\t ]+$/gm, '').replace(/\r?\n(\r?\n)+/gm, '\n\n')
    // skip metadata section
    let meta_match = cleaned.split('\n\n', 1)[0].match(/^\w+\s*:\s*.*$/gm)
    if (meta_match) cleaned = cleaned.slice(cleaned.indexOf('\n\n')).trim()

    let stanzas = cleaned.split('\n\n')
    return stanzas.map((s, i) => <Stanza stanza={s} key={i}/>)
}

export const SongText = ({song}) => (
    <div className="song-text">
        {parse_text(song.text)}
    </div>
)

export const SongSheet = ({song}) => (
    <span class="not-implemented">Not implemented yet</span>
)
