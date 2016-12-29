import React from 'react'
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl'

import messages from '../../translations/messages.yml'

import {CHANGE} from './actions.js'

class LangSelect extends React.Component {
    handleChange(e) {
        return this.props.onChange(e.target.value)
    }

    render() {
        return (
            <p>
                <label htmlFor="lang-select">
                    <FormattedMessage id='settings.label.lang' />:
                </label>
                <select id='lang-select' value={this.props.value} onChange={this.handleChange.bind(this)}>
                    {Object.keys(messages).map(lang =>
                        <option key={lang} value={lang}>{lang}</option>
                    )}
                </select>
            </p>
        )
    }
}
LangSelect.propTypes = {
    onChange: React.PropTypes.func,
    value: React.PropTypes.string.isRequired,
}

const SettingsForm = (props) => (
    <form>
        <LangSelect onChange={props.onLanguageChange} value={props.language} />
    </form>
)
SettingsForm.propTypes = {
    language: React.PropTypes.string.isRequired,
    onLanguageChange: React.PropTypes.func,
}

export const Settings = connect(
    state => state.settings,
    dispatch => ({
        onLanguageChange: (lang) => {
            dispatch(CHANGE({language: lang}))
        },
    })
)(SettingsForm)

export default Settings
