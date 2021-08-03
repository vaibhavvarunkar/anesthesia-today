import { SET_AIRWAY_ADJUNCT_3, SET_AIRWAY_ADJUNCT_TYPE_3, SET_AIRWAY_CALCULATORS_3, SET_AIRWAY_NOTES_3, SET_AIRWAY_OTHER_3, SET_INTUBATION_3, SET_LARYNGOSCOPE_MAIN_3, SET_LARYNGOSCOPE_SUB_SUB_TYPE_3, SET_LARYNGOSCOPE_SUB_TYPE_3, SET_LMA_3, SET_LUNG_INTUBATION_3, SET_LUNG_SUB_INTUBATION_3, SET_LUNG_SUB_SUB_INTUBATION_3, SET_MASK_3, SET_SUB_INTUBATION_3 } from "./EmergencyAirwayTypes"

const initial_state = {
    mask3: "",
    Lma3: "",
    intubation3: "",
    subIntubation3: "",
    lungIntubation3: "",
    lungSubIntubation3: "",
    lungSubSubIntubation3: "",
    laryngoscopeType3: "",
    laryngoscopeSubType3: "",
    laryngoscopeSubSubType3: "",
    airwayAdjunct3: "",
    airwayAdjunctType3: "",
    airwayOther3: "",
    airwayCalc3: "",
    airwayNotes3: "",
}


const AirwayReducer3 = (state = initial_state, action) => {
    switch (action.type) {
        case SET_MASK_3:
            return {
                ...state,
                mask3: action.payload
            }
        case SET_LMA_3:
            return {
                ...state,
                Lma3: action.payload
            }
        case SET_INTUBATION_3:
            return {
                ...state,
                intubation3: action.payload
            }
        case SET_SUB_INTUBATION_3:
            return {
                ...state,
                subIntubation3: action.payload
            }
        case SET_LUNG_INTUBATION_3:
            return {
                ...state,
                lungIntubation3: action.payload

            }
        case SET_LUNG_SUB_INTUBATION_3:
            return {
                ...state,
                lungSubIntubation3: action.payload

            }
        case SET_LUNG_SUB_SUB_INTUBATION_3:
            return {
                ...state,
                lungSubSubIntubation3: action.payload
            }
        case SET_LARYNGOSCOPE_MAIN_3:
            return {
                ...state,
                laryngoscopeType3: action.payload
            }
        case SET_LARYNGOSCOPE_SUB_TYPE_3:
            return {
                ...state,
                laryngoscopeSubType3: action.payload
            }
        case SET_LARYNGOSCOPE_SUB_SUB_TYPE_3:
            return {
                ...state,
                laryngoscopeSubSubType3: action.payload
            }
        case SET_AIRWAY_ADJUNCT_TYPE_3:
            return {
                ...state,
                airwayAdjunct3: action.payload
            }
        case SET_AIRWAY_ADJUNCT_3:
            return {
                ...state,
                airwayAdjunctType3: action.payload
            }
        case SET_AIRWAY_OTHER_3:
            return {
                ...state,
                airwayOther3: action.payload
            }
        case SET_AIRWAY_CALCULATORS_3:
            return {
                ...state,
                airwayCalc3: action.payload
            }
        case SET_AIRWAY_NOTES_3:
            return {
                ...state,
                airwayNotes3: action.payload
            }
        default: return state
    }
}

export default AirwayReducer3