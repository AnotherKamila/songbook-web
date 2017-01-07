// Feedback form.

// buaaaah whatever :D

import React from 'react'
import {injectIntl} from 'react-intl'

export const Feedback = injectIntl(({intl}) => (
    <div className="content-wrapper">
        <iframe src={intl.messages['feedback.form_url']}
                style={{width: '100%', height: '1000px'}}
                frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe>
    </div>
))
