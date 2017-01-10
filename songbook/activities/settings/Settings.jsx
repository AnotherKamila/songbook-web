import React from 'react'
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import {DropDownMenu, MenuItem, Paper} from 'material-ui'
import {FormattedMessage as T} from 'react-intl'

import messages from '../../../translations/messages.yml'

import {CHANGE} from './actions.js'

export const LangSelect = ({value, onChange}) => (
    <DropDownMenu value={value} onChange={(e, i, val) => onChange(val)}>
        {Object.keys(messages).map(lang => (
            <MenuItem value={lang}
                      label={<T id='settings.label.lang' values={{lang: lang}}/>}
                      primaryText={lang}
                      key={lang} />
            )
        )}
    </DropDownMenu>
)
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

const SettingsScreen = props => (
    <div className="content-wrapper">
        <div className='content padded'>
            <Paper className='paper-responsive padded'>
                <SettingsForm {...props} />
            </Paper>
        </div>
    </div>
)

export const Settings = connect(
    state => state.settings,
    dispatch => ({
        onLanguageChange: (lang) => {
            dispatch(CHANGE({language: lang}))
        },
    })
)(SettingsScreen)
