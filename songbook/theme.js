import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {m} from './utils'

export const my_theme = getMuiTheme({
    palette: {
        primary1Color: '#073642',
        primary2Color: '#002b36',
        accent1Color: '#859900',
    },
    appBar: {
        height: 56,
    },
})

export const my_theme_night = getMuiTheme(m(darkBaseTheme, {
    palette: m(darkBaseTheme.palette, {
        primary1Color: '#268bd2',
        // primary2Color: '#002b36',
        accent1Color: '#859900',
    }),
    appBar: {
        height: 56,
    },
}))
