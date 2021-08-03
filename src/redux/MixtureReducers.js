import { SET_MIXTURE_CONCENTRATION, SET_MIXTURE_DOSE, SET_MIXTURE_RATIO } from "./MixtureTypes"

const initial_state = {
    mixDose: [],
    mixConc: [],
    mixRatio: ""
}

const mixReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_MIXTURE_DOSE:
            return {
                ...state,
                mixDose: action.payload
            }
        case SET_MIXTURE_CONCENTRATION:
            return {
                ...state,
                mixConc: action.payload
            }
        case SET_MIXTURE_RATIO:
            return {
                ...state,
                mixRatio: action.payload
            }
        default: return state
    }
}

export default mixReducer