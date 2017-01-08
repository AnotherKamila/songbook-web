import React from 'react'
import {FormattedMessage} from 'react-intl'

import {AppBarView} from './AppBarView.jsx'
import {AppDrawer} from './AppDrawer'

import '../songbook.sass'

export class ContainerView extends React.Component {
    constructor(props) {
        super(props)
        this.state = {drawer_open: false}
    }

    drawer_set_open = (open) => {
        this.setState({drawer_open: open})
    }

    render() {
        return (
            <div className='songbook-container'>
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
ContainerView.propTypes = {
    children: React.PropTypes.node,
    onDrawerNavRequest: React.PropTypes.func.isRequired,
}
