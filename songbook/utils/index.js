import _ from 'lodash'

export const m = (old, over) => Object.assign({}, old, over)

// TODO put the catches back :D
export function fetch_with_actions(url) {
    return (dispatch, action_before, action_creator_after_success, action_creator_after_error) => {
        function handle_error(err) {
            dispatch(action_creator_after_error(err.toString()))
        }
        function handle_response(response) {
            if (response.ok) {
                response.json()
                    .then(json => dispatch(action_creator_after_success(json)))
                    // .catch(handle_error)
            } else {
                dispatch(action_creator_after_error(response.status+' '+response.statusText))
            }
        }
        dispatch(action_before)
        fetch(url, {redirect: 'follow'}).then(handle_response)
            // .catch(handle_error)
    }
}

export const myfetch = (path) => fetch_with_actions(API_URL+path)

export const asciify = (text, aggressive=false) => {
    const TRANSLIT_FROM = 'àáäâæçčďèéëêěìíïîľĺňñòóöôŕřšßťùúüůûýž'
    const TRANSLIT_TO   = 'aaaaeccdeeeeeiiiillnnoooorrsstuuuuuyz'
    text = text.toLowerCase().trim()
    for (let i = 0; i < TRANSLIT_FROM.length; ++i) {
        text = text.replace(new RegExp(TRANSLIT_FROM[i], 'g'), TRANSLIT_TO[i])
    }
    if (aggressive) {
        text = text.replace(/[\'"!?]/g, '')
        text = text.replace(/[^a-zA-Z0-9\/_]/g, '-')
        text = text.replace(/-+/g, '-')
    }
    return text
}
window.asciify = asciify
