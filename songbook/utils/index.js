import {API_URL} from '../../config.js'

export const m = (old, over) => Object.assign({}, old, over)

export function fetch_with_actions(url) {
    return (dispatch, action_before, action_creator_after_success, action_creator_after_error) => {
        function handle_error(err) {
            dispatch(action_creator_after_error(err.toString()))
        }
        function handle_response(response) {
            if (response.ok) {
                response.json()
                    .then(json => dispatch(action_creator_after_success(json)))
                    .catch(handle_error)
            } else {
                dispatch(action_creator_after_error(response.status+' '+response.statusText))
            }
        }
        dispatch(action_before)
        fetch(url, {redirect: 'follow'}).then(handle_response).catch(handle_error)
    }
}

export const myfetch = (path) => fetch_with_actions(API_URL+path)
