import React from 'react'
import {connect} from 'react-redux'
import {FormattedMessage} from 'react-intl'
import {DropDownMenu, MenuItem, List, ListItem, Subheader, Toggle, Paper, Avatar} from 'material-ui'
import {FormattedMessage as T} from 'react-intl'
import {SignInController} from '../../user/index.jsx'

import messages from '../../../translations/messages.yml'
import {m} from '../../utils'

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

const SettingsScreen = (props) => (
    <div className="content-wrapper">
        <div className='content padded'>
            <Paper className='paper-responsive padded'>
                <List>
                    <Subheader><T id='settings.section.general'/></Subheader>
                    <ListItem primaryText={<T id='settings.label.night_mode.primary'/>}
                              secondaryText={<div><T id='settings.label.night_mode.secondary'/></div>}
                              rightToggle={<Toggle toggled={props.night_mode}
                                                   onToggle={(e, toggled) => props.onChange({night_mode: toggled})} />} />
                    {props.user ?
                        <ListItem primaryText={<T id='settings.sign_out'/>}
                              secondaryText={<div><T id='settings.logged_in_as' values={{name: props.user.name}}/></div>}
                              rightAvatar={<Avatar src={props.user.image}/>}
                              onTouchTap={SignInController.sign_out}/>
                        : ''}
                </List>
                <SettingsForm {...props} />
            </Paper>
        </div>
    </div>
)

export const Settings = connect(
    state => m(state.settings, {user: state.user ? state.user.profile : null}),
    dispatch => ({
        onChange: (new_settings) => dispatch(CHANGE(new_settings)),
    })
)(SettingsScreen)
