import React from 'react'
import {connect} from 'react-redux'
import {FormattedMessage as T, injectIntl} from 'react-intl'

import {LangSelect} from '../settings/Settings.jsx'
import {CHANGE} from '../settings/actions'
import en_text from 'html!markdown!./en.md'
import sk_text from 'html!markdown!./sk.md'

export const Intro = connect(
    state => ({
        language: state.settings.language,
    }),
    dispatch => ({
        onLanguageChange: (lang) => {
            dispatch(CHANGE({language: lang}))
        },
    })
)(injectIntl(props => (
    <div className="songbook-wrapper">
        <div className="songbook-content padded">
            <div className='header-right'>
                <LangSelect value={props.language}
                            onChange={props.onLanguageChange} />
            </div>
            <h1><T id="intro.title"/></h1>
            <div dangerouslySetInnerHTML={{__html: props.intl.locale == 'sk' ? sk_text : en_text}} />
        </div>
    </div>
)))
