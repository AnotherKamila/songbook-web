import React from 'react'
import {FormattedMessage as T} from 'react-intl'
// import {connect} from 'react-redux'
import {FlatButton} from 'material-ui'

const google_login = (response) => console.log('google_login', response)

// Note to self: window.crypto.getRandomValues()

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {profile: null}

        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                client_id: GOOGLE_SIGNIN_CLIENT_ID,
                fetch_basic_profile: false,
                scope: "profile openid"
            }).then(
                (auth) => {
                    auth.isSignedIn.listen(this.signin_changed)
                    auth.currentUser.listen(this.user_changed)
                    if (auth.isSignedIn.get()) auth.signIn()
                    this.auth = auth
                },
                (error) => console.log('google login init error', error)
            )
        })
    }

    user_changed = (user) => {
        console.log('user_changed', user)
        if (user.isSignedIn()) {
            const g_profile = user.getBasicProfile()
            this.setState({
                profile: {
                    name: g_profile.getName(),
                    id: g_profile.getId(),
                    image: g_profile.getImageUrl()
                },
            })
        } else {
            this.setState({profile: null})
        }
    }

    sign_out = () => this.auth.signOut()

    render() {
        let img = this.state.profile ? <img src={this.state.profile.image} /> : ''
        return (
            <div>
                <div className="g-signin2"></div>
                <span>Stuff: {JSON.stringify(this.state.profile)}</span>
                {img}
                {this.state.profile ? <FlatButton onClick={this.sign_out}>Sign Out</FlatButton> : ''}
            </div>
        )
    }
}

// Note to self: You will need to call grecaptcha.reset() to ask the end user to verify with reCAPTCHA again.
// Note to self: grecaptcha.getResponse(opt_widget_id) instead of callback, maybe
const ReCaptcha = ({on_submit}) => (
    <button className="g-recaptcha"
            data-sitekey="6Lf2xx0UAAAAABnnEZqkmeCkK1MmewlCL9KjTJze"
            data-callback={on_submit}>
        Submit
    </button>
)


window.recaptcha_submitted = (token) => console.log('recaptcha', token)
export const Home = props => (
    <div className="content-wrapper">
        <div className='content padded'>
            <T id='home.you_should_sign_in' />
            <SignIn/>
        </div>
        <ReCaptcha on_submit="recaptcha_submitted"/>
    </div>
)
