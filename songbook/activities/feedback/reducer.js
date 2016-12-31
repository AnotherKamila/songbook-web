/*
state shape:

none so far
*/

import {handleActions} from 'redux-actions'
import {m} from '../../utils'

export const my_songbook_reducer = handleActions({
    'my_songbook/HOME_URL_CHANGE': (state, action) => m(state, {'HOME_URL': action.payload}),
}, {'mrkva': 'kalerab'})

export default my_songbook_reducer
