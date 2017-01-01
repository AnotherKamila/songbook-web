// Feedback form.

// buaaaah whatever :D

import React from 'react'
import {FormattedMessage, injectIntl} from 'react-intl'

import {AppBar} from '../../container'

export const Feedback = injectIntl(({intl}) => (
    <div className="content-wrapper">
        <AppBar title={<FormattedMessage id='feedback.title' />} />
        <iframe src={intl.messages['feedback.form_url']}
                style={{width: '100%', height: '1000px'}}
                frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
    </div>
))
