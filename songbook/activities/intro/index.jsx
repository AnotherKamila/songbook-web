import React from 'react'
import {FormattedMessage as T, injectIntl} from 'react-intl'
import en_text from 'html!markdown!./en.md'
import sk_text from 'html!markdown!./sk.md'

export const Intro = injectIntl(({intl}) => (
    <div className="songbook-wrapper">
        <div className="songbook-content padded">
            <h1><T id="intro.title"/></h1>
            <div dangerouslySetInnerHTML={{__html: intl.locale == 'sk' ? sk_text : en_text}} />
        </div>
    </div>
))
