import React from 'react'
import {FormattedMessage} from 'react-intl'
import muiThemeable from 'material-ui/styles/muiThemeable'

import {AppBarView} from './AppBarView.jsx'
import {AppDrawer} from './AppDrawer'

import '../songbook.sass'

class ContainerView_ extends React.Component {
    constructor(props) {
        super(props)
        this.state = {drawer_open: false}
    }

    drawer_set_open = (open) => {
        this.setState({drawer_open: open})
    }

    render() {
        return (
            <div className='songbook-container' style={{
                        color: this.props.muiTheme.palette.textColor,
                        backgroundColor: this.props.muiTheme.palette.canvasColor,
                        transition: 'background-color 450ms',
                    }}>
                <AppBarView onDrawerOpenRequest={this.drawer_set_open}
                            content={this.props.children.props.route.appbar_content}
                            title_id={this.props.children.props.route.appbar_title_id} />
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
