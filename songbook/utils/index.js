import {API_URL} from '../../config.js'

export const m = (old, over) => Object.assign({}, old, over)

export function fetch_with_actions(url) {
    return (dispatch, action_before, action_creator_after_success, action_creator_after_error) => {
        function handle_response(response) {
            if (response.ok) {
                response.json().then(json => dispatch(action_creator_after_success(json)))
            } else {
                dispatch(action_creator_after_error(response.statusText))
            }
        }
        dispatch(action_before)
        fetch(url).then(handle_response)
    }
}

export const myfetch = (path) => fetch_with_actions(API_URL+path)
