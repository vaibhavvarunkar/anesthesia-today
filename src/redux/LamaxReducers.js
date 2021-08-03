import { SET_ADMINISTRATION_VOLUME, SET_CONCENTRATION, SET_DOSE, SET_LAMAX_COMORBITIES, SET_LAMAX_WEIGHT_TYPE, SET_PATIENT_WEIGHT } from "./LamaxTypes"

const initialState = {
    dose: [],
    conc: [],
    weightType: "",
    lamaxWeightType: [],
    lamaxComorbities: [],
    adminVolume: [],

}

const lamaxReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DOSE:
            return {
                ...state,
                dose: action.payload
            }
        case SET_CONCENTRATION:
            return {
                ...state,
                conc: action.payload
            }
        case SET_PATIENT_WEIGHT:
            return {
                ...state,
                weightType: action.payload
            }
        case SET_LAMAX_WEIGHT_TYPE:
            return {
                ...state,
                lamaxWeightType: action.payload
            }
        case SET_LAMAX_COMORBITIES:
            return {
                ...state,
                lamaxComorbities: action.payload
            }
        case SET_ADMINISTRATION_VOLUME:
            return {
                ...state,
                adminVolume: action.payload
            }
        default: return state
    }
}

export default lamaxReducer