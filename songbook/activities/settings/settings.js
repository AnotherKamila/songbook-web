import messages from '../../../translations/messages.yml'

const get_default_language = () => {
    for (let k of navigator.languages) if (messages[k]) return k
    return 'en'
}

export const default_state = {
    language: get_default_language(),
    night_mode: false,
}
