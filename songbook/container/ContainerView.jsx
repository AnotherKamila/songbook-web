import React from 'react'
import {FormattedMessage} from 'react-intl'
import muiThemeable from 'material-ui/styles/muiThemeable'

import {AppBarView} from './AppBarView.jsx'
import {AppDrawer} from './AppDrawer'

import '../songbook.sass'

const APPBAR_HIDE_TIMEOUT = 4000 // ms

class ContainerView_ extends React.Component {
    constructor(props) {
        super(props)
        this.state = {drawer_open: false, appbar_visible: true}
        this.appbar_set_hide_timeout(true)
        this.last_mouse_pos = {x: 0, y: 0}
    }

    drawer_set_open = (open) => {
        this.setState({drawer_open: open})
    }

    appbar_set_visible = (visible, event, click) => {
        this.setState({appbar_visible: visible})
        this.appbar_set_hide_timeout(visible, event, click)
    }

    appbar_show = (event) => this.appbar_set_visible(true, event)
    appbar_hide = (event) => this.appbar_set_visible(false, event)

    appbar_set_hide_timeout = (visible, event, click) => {
        clearTimeout(this.appbar_hide_timer)
        if (visible) this.appbar_hide_timer = setTimeout(this.appbar_hide, APPBAR_HIDE_TIMEOUT)
        if (event) this.last_mouse_pos = {x: event.screenX, y: event.screenY}
    }

    appbar_show_if_needed = (event, click) => {
        if (event.screenX != this.last_mouse_pos.x ||
            event.screenY != this.last_mouse_pos.y) {
            this.appbar_show(event)
        }
    }

    render() {
        return (
            <div className='songbook-container'
                    style={{
                        color: this.props.muiTheme.palette.textColor,
                        backgroundColor: this.props.muiTheme.palette.canvasColor,
                        transition: 'background-color 450ms',
                    }}
                    onMouseMove={this.appbar_show_if_needed}
                    onTouchEnd={() => this.appbar_show}
                    onClick={this.appbar_show}
                    >
                <AppBarView onDrawerOpenRequest={this.drawer_set_open}
                            content={this.props.children.props.route.appbar_content}
                            title_id={this.props.children.props.route.appbar_title_id}
                            style={{opacity: this.state.appbar_visible ? 1 : 0, }} />
                <AppDrawer open={this.state.drawer_open}
                           onOpenRequest={this.drawer_set_open}
                           onNavRequest={this.props.onDrawerNavRequest}
                           location={this.props.location}
                           router={this.props.router}/>
                    {this.props.children}
            </div>
        )
    }
}
ContainerView_.propTypes = {
    children: React.PropTypes.node,
    onDrawerNavRequest: React.PropTypes.func.isRequired,
}

export const ContainerView = muiThemeable()(ContainerView_)
