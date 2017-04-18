import React from 'react'
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import {DropDownMenu, MenuItem, List, ListItem, Subheader, Toggle, Paper} from 'material-ui'
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
        <LangSelect onChange={lang => props.onChange({language: lang})} value={props.language} />
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
                <List>
                    <Subheader><T id='settings.section.general' /></Subheader>
                    <ListItem primaryText={<T id='settings.label.night_mode' />}
                              rightToggle={<Toggle toggled={props.night_mode}
                                                   onToggle={(e, toggled) => props.onChange({night_mode: toggled})} />} />
                </List>
                <SettingsForm {...props} />
            </Paper>
        </div>
    </div>
)

export const Settings = connect(
    state => state.settings,
    dispatch => ({
        onChange: (new_settings) => {
            dispatch(CHANGE(new_settings))
        },
    })
)(SettingsScreen)
