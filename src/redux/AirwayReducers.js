
import { SET_AIRWAY_ADJUNCT, SET_AIRWAY_ADJUNCT_TYPE, SET_AIRWAY_CALCULATORS, SET_AIRWAY_NOTES, SET_AIRWAY_OTHER, SET_INTUBATION, SET_LARYNGOSCOPE_MAIN, SET_LARYNGOSCOPE_SUB_SUB_TYPE, SET_LARYNGOSCOPE_SUB_TYPE, SET_LMA, SET_LUNG_INTUBATION, SET_LUNG_SUB_INTUBATION, SET_LUNG_SUB_SUB_INTUBATION, SET_MASK, SET_SUB_INTUBATION } from "./AirwayTypes"

const initial_state = {
    mask: "",
    Lma: "",
    intubation: "",
    subIntubation: "",
    lungIntubation: "",
    lungSubIntubation: "",
    lungSubSubIntubation: "",
    laryngoscopeType: "",
    laryngoscopeSubType: "",
    laryngoscopeSubSubType: "",
    airwayAdjunct: "",
    airwayAdjunctType: "",
    airwayOther: "",
    airwayCalc: "",
    airwayNotes: "",
}


const AirwayReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_MASK:
            return {
                ...state,
                mask: action.payload
            }
        case SET_LMA:
            return {
                ...state,
                Lma: action.payload
            }
        case SET_INTUBATION:
            return {
                ...state,
                intubation: action.payload
            }
        case SET_SUB_INTUBATION:
            return {
                ...state,
                subIntubation: action.payload
            }
        case SET_LUNG_INTUBATION:
            return {
                ...state,
                lungIntubation: action.payload

            }
        case SET_LUNG_SUB_INTUBATION:
            return {
                ...state,
                lungSubIntubation: action.payload

            }
        case SET_LUNG_SUB_SUB_INTUBATION:
            return {
                ...state,
                lungSubSubIntubation: action.payload
            }
        case SET_LARYNGOSCOPE_MAIN:
            return {
                ...state,
                laryngoscopeType: action.payload
            }
        case SET_LARYNGOSCOPE_SUB_TYPE:
            return {
                ...state,
                laryngoscopeSubType: action.payload
            }
        case SET_LARYNGOSCOPE_SUB_SUB_TYPE:
            return {
                ...state,
                laryngoscopeSubSubType: action.payload
            }
        case SET_AIRWAY_ADJUNCT:
            return {
                ...state,
                airwayAdjunct: action.payload
            }
        case SET_AIRWAY_ADJUNCT_TYPE:
            return {
                ...state,
                airwayAdjunctType: action.payload
            }
        case SET_AIRWAY_OTHER:
            return {
                ...state,
                airwayOther: action.payload
            }
        case SET_AIRWAY_CALCULATORS:
            return {
                ...state,
                airwayCalc: action.payload
            }
        case SET_AIRWAY_NOTES:
            return {
                ...state,
                airwayNotes: action.payload
            }
        default: return state
    }
}

export default AirwayReducer