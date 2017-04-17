// window.Abc must be available for transposing, because I am a very bad person.

import React from 'react'

import './song.sass'

const Chord = ({chord}) => <span className='chord'>{chord}</span>

const notation_normalize   = (c, is_german) => is_german ? c.replace('H', 'B') : c
const notation_denormalize = (c, is_german) => is_german ? c.replace('B', 'H') : c

// abc2svg is much better at transposing chords than me. I should say I'm not
// proud of this, but I kinda am.
function transpose_chords(n, chords, german_notation_in=true, german_notation_out=true) {
    chords = chords.map(c => notation_normalize(c, german_notation_in))
    let res_chords = []
    function eat_chunk(chunk) {
        let ms = chunk.match(/<text class="f2"[^>]*>[^<]+<\/text>/g)
        if (ms) ms.forEach(m => res_chords.push(m.match(/<text class="f2"[^>]*>([^<]+)<\/text>/)[1]))
    }
    const evil_hack = new Abc({img_out: eat_chunk, errmsg: console.warn})
    let preamble = '%%transpose '+n+'\nX:1\nL:1/2\nM:2/4\nK:C\nV:1\n'
    let v = chords.map(ch => '"'+ch+'" A |').join('') + ']'
    evil_hack.tosvg('[transpose hack]', preamble+v)
    return res_chords.map(c => notation_denormalize(c, german_notation_out))
}

const Stanza = ({stanza, transpose}) => {
    let chord_re    = RegExp(/<<[\w#+\/]+>>/g) // can't use capture because browsers...
    let chords      = stanza.match(chord_re) || []
    let text_pieces = stanza.split(chord_re) || []
    let res = []
    chords = transpose_chords(transpose, chords.map(ch => ch.substring(2, ch.length-2)))
    for (let i = 0; i < chords.length; ++i) {
        res.push(text_pieces[i])
        res.push(<Chord chord={chords[i]}
                        key={i} />)
    }
    res.push(text_pieces[text_pieces.length-1])
    return <p className='stanza' className={chords.length ? 'has-chords' : null}>{res}</p>
}
Stanza.propTypes = {
    stanza: React.PropTypes.string.isRequired,
    transpose: React.PropTypes.number.isRequired
}

function parse_text(text, transpose) {
    // remove comments (marked by `#` at the beginning of line) and excess whitespace
    let cleaned = text.replace(/^#[^\n]*\n/gm, '').replace(/[\t ]+$/gm, '').replace(/\r?\n(\r?\n)+/gm, '\n\n')
    // skip metadata section
    let meta_match = cleaned.split('\n\n', 1)[0].match(/^\w+\s*:\s*.*$/gm)
    if (meta_match) cleaned = cleaned.slice(cleaned.indexOf('\n\n')).trim()

    let stanzas = cleaned.split('\n\n')
    return stanzas.map((s, i) => <Stanza stanza={s} key={i} transpose={transpose}/>)
}

export const SongText = ({text, transpose}) => (
    <div className="song-text">
        {parse_text(text, transpose)}
    </div>
)
SongText.propTypes = {
    text: React.PropTypes.string.isRequired,
    transpose: React.PropTypes.number.isRequired
}
