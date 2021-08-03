import { SET_ACTION_LIBRARY_DATA, PREOP_CLICK, POSTOP_CLICK, INTRAOP_CLICK } from "./ActionsSummaryActionTypes.js"

const initialState = {
    preop: true,
    intraop: false,
    postop: false,
    allActionLibraryData: []
}

const actionSummaryReducers = (state = initialState, action) => {
    switch (action.type) {
        case PREOP_CLICK:
            return {
                ...state,
                preop: action.payload,
                intraop: false,
                postop: false

            }

        case POSTOP_CLICK:
            return {
                ...state,
                postop: action.payload,
                preop: false,
                intraop: false

            }
        case INTRAOP_CLICK:
            return {
                ...state,
                intraop: action.payload,
                preop: false,
                postop: false

            }
        case SET_ACTION_LIBRARY_DATA:
            return {
                ...state,
                allActionLibraryData: action.payload
            }


        default: return state

    }

}

export default actionSummaryReducers