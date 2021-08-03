import { SET_ACTION_LIBRARY_DATA, PREOP_CLICK, POSTOP_CLICK, INTRAOP_CLICK } from "./ActionsSummaryActionTypes.js"


export const preopEnable = preopstatus => {
    return {
        type: PREOP_CLICK,
        payload: preopstatus

    }
}

export const postopEnable = poststaus => {
    return {
        type: POSTOP_CLICK,
        payload: poststaus
    }
}

export const intraopEnable = intraopstaus => {
    return {
        type: INTRAOP_CLICK,
        payload: intraopstaus
    }
}

export const setActionLibraryData = actionLibraryData => {
    return {
        type: SET_ACTION_LIBRARY_DATA,
        payload: actionLibraryData
    }
}



