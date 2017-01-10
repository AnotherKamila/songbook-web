import React from 'react'
import {FormattedMessage as T} from 'react-intl'

export const Fallback = ({location}) => (
    <div className="songbook-wrapper">
        <div className="songbook-content padded">
            <h1><T id="fallback.title"/></h1>
            <p><T id="fallback.message" values={{url: location.pathname}}/></p>
        </div>
    </div>
)
