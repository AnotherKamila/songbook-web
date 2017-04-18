import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {m} from './utils'

export const my_base = {
    palette: {
        primary1Color: '#073642',
        accent1Color: '#859900',
    },
    appBar: {
        height: 56,
    },
}

export const my_base_night_palette = m(my_base.palette, {
    primary1Color: '#184f5c',
    alternateTextColor: '#ffffff',
})

export const my_theme = getMuiTheme(my_base)

export const my_theme_night = getMuiTheme(m(
        m(darkBaseTheme, my_base),
        {palette: m(darkBaseTheme.palette, my_base_night_palette)}
))
