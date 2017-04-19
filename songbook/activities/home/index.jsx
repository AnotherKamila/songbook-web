import React from 'react'
import {FormattedMessage as T} from 'react-intl'
// import {connect} from 'react-redux'
import {FlatButton} from 'material-ui'

const google_login = (response) => console.log('google_login', response)

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
                },
                (error) => console.log('google login init error', error)
            )
        })
    }

    user_changed = (user) => {
        console.log('user_changed', user)
        const g_profile = user.getBasicProfile()
        this.setState({
            profile: {
                name: g_profile.getName(),
                id: g_profile.getId(),
                image: g_profile.getImageUrl()
            },
        })
    }

    sign_out = () => {
        this.auth.signOut().then(() => {console.log('User signed out.')})
    }

    componentDidMount() {
        gapi.signin2.render('g-signin2', {
            onsuccess: this.signin_changed,
            onerror: (err) => console.log(err),
        })
    }

    render() {
        let img = this.state.profile ? <img src={this.state.profile.image} /> : ''
        return (
            <div>
                <div className="g-signin2"></div>
                <span>Stuff: {JSON.stringify(this.state.profile)}</span>
                {img}
                <FlatButton onClick={this.sign_out}>Sign Out</FlatButton>
            </div>
        )
    }
}

export const Home = props => (
    <div className="content-wrapper">
        <div className='content padded'>
            <T id='home.you_should_sign_in' />
            <SignIn/>
        </div>
    </div>
)
