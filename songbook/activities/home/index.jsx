import React from 'react'
import {AppBar} from '../../container'
import {FormattedMessage} from 'react-intl'
// import {connect} from 'react-redux'

export const Home = props => (
    <div className="content-wrapper">
        <AppBar title={<FormattedMessage id='home.title' />} />
        <div className='content padded song-view'>
            <span className='not-implemented'>TODO implement this :D</span>
        </div>
    </div>
)
