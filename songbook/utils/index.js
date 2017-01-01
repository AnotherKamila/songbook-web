import {API_URL} from '../../config.js'

export const m = (old, over) => Object.assign({}, old, over)

export function fetch_with_actions(url) {
    return (dispatch, action_before, action_creator_after) => {
        dispatch(action_before)
        console.log('fetch_with_actions: fetching url', url)
        fetch(url)
            .then(response => response.json())
            .then(json => dispatch(action_creator_after(json)))
    }
}

export const myfetch = (path) => fetch_with_actions(API_URL+path)
