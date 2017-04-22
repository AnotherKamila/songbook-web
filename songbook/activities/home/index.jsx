import React from 'react'
import {FormattedMessage as T} from 'react-intl'
import {connect} from 'react-redux'
import {FlatButton, Paper} from 'material-ui'

import {SignInButton} from '../../user/index.jsx'

// Note to self for local-only users: window.crypto.getRandomValues()

// Note to self: You will need to call grecaptcha.reset() to ask the end user to verify with reCAPTCHA again.
// Note to self: grecaptcha.getResponse(opt_widget_id) instead of callback, maybe
const ReCaptcha = ({on_submit}) => (
    <button className="g-recaptcha"
            data-sitekey="6Lf2xx0UAAAAABnnEZqkmeCkK1MmewlCL9KjTJze"
            data-callback={on_submit}>
        Submit
    </button>
)

// window.recaptcha_submitted = (token) => console.log('recaptcha', token)

//         <ReCaptcha on_submit="recaptcha_submitted"/>


//////////////////////////////////////////////////////////////////////////

const MySongbook = ({user}) => (
    <div>
        <span>props.user: {JSON.stringify(user)}</span>
        <img src={user.profile.image}/>
    </div>
)

export const MySongbookContainer = connect(
    state => ({user: state.user}),
)(({user}) => (
    <div className='content padded'>
        {user && user.id ? <MySongbook user={user}/> : <ShouldSignIn/>}
    </div>
))

const ShouldSignIn = () => (
    <div style={{textAlign: 'center'}}>
        <p><T id='home.you_should_sign_in' /></p>
            <SignInButton/>
        <p><T id='home.you_dont_have_to_sign_in' /></p>
    </div>
)

export const Home = ({user}) => (
    <div className="content-wrapper">
        <MySongbookContainer/>
    </div>
)
