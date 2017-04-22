import React from 'react'
import {createAction, handleActions} from 'redux-actions'
import {connect} from 'react-redux'
import {FormattedMessage as T} from 'react-intl'

import {m} from '../utils'

export const USER_CHANGE  = createAction('user/USER_CHANGE')
export const SIGN_OUT_REQ = createAction('user/SIGN_OUT_REQ')

export const user_reducer = handleActions({
    'user/USER_CHANGE':  (state, action) => m(state, {profile: action.payload}),
}, {profile: null})

export const SignInController = connect(
    state => ({user: state.user}),
    dispatch => ({
        on_signin_change: (profile) => dispatch(USER_CHANGE(profile)),
    })
)(class SignInController extends React.Component {
    constructor(props) {
        super(props)
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: GOOGLE_SIGNIN_CLIENT_ID,
                fetch_basic_profile: false,
                scope: "profile openid"
            }).then(
                (auth) => {
                    auth.currentUser.listen(this.user_changed)
                    this.user_changed(auth.currentUser.get())
                },
                (error) => alert('google login init error', error)
            )
        })
    }

    user_changed = (user) => {
        if (user.isSignedIn()) {
            const g_profile = user.getBasicProfile()
            this.props.on_signin_change({
                name: g_profile.getName(),
                id: g_profile.getId(),
                image: g_profile.getImageUrl()
            })
        } else {
            this.props.on_signin_change(null)
        }
    }

    render() {
        return this.props.children
    }
})
SignInController.sign_out = () => gapi.auth2.getAuthInstance().signOut() // function not plain assignment because auth2 not defined yet

const google_signin_render_button = (el) => {
    if (!el) return
    gapi.signin2.render(el, {
        width: '200px',
        height: '42px',
        longtitle: true,
        theme: 'dark',
    })
}
export const SignInButton = () => (
    <div ref={google_signin_render_button} style={{width: '200px', margin: '0 auto'}} />
)

// export const SignInButton = () => (
//     <RaisedButton ref={google_signin_attach_click}
//                   label={<T id="app.sign_in_with_google"/>}
//                   icon={<GoogleIcon style={{height: '48px', width: '48px'}}/>}
//                   style={{height: '48px', background: '#4285f4'}}/>
// )
