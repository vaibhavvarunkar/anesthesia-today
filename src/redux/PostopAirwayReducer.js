import { SET_AIRWAY_ADJUNCT_2, SET_AIRWAY_ADJUNCT_TYPE_2, SET_AIRWAY_CALCULATORS_2, SET_AIRWAY_NOTES_2, SET_AIRWAY_OTHER_2, SET_INTUBATION_2, SET_LARYNGOSCOPE_MAIN_2, SET_LARYNGOSCOPE_SUB_SUB_TYPE_2, SET_LARYNGOSCOPE_SUB_TYPE_2, SET_LMA_2, SET_LUNG_INTUBATION_2, SET_LUNG_SUB_INTUBATION_2, SET_LUNG_SUB_SUB_INTUBATION_2, SET_MASK_2, SET_SUB_INTUBATION_2 } from "./PostopAirwayTypes"

const initial_state = {
    mask2: "",
    Lma2: "",
    intubation2: "",
    subIntubation2: "",
    lungIntubation2: "",
    lungSubIntubation2: "",
    lungSubSubIntubation2: "",
    laryngoscopeType2: "",
    laryngoscopeSubType2: "",
    laryngoscopeSubSubType2: "",
    airwayAdjunct2: "",
    airwayAdjunctType2: "",
    airwayOther2: "",
    airwayCalc2: "",
    airwayNotes2: "",
}


const PostopAirwayReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_MASK_2:
            return {
                ...state,
                mask2: action.payload
            }
        case SET_LMA_2:
            return {
                ...state,
                Lma2: action.payload
            }
        case SET_INTUBATION_2:
            return {
                ...state,
                intubation2: action.payload
            }
        case SET_SUB_INTUBATION_2:
            return {
                ...state,
                subIntubation2: action.payload
            }
        case SET_LUNG_INTUBATION_2:
            return {
                ...state,
                lungIntubation2: action.payload

            }
        case SET_LUNG_SUB_INTUBATION_2:
            return {
                ...state,
                lungSubIntubation2: action.payload

            }
        case SET_LUNG_SUB_SUB_INTUBATION_2:
            return {
                ...state,
                lungSubSubIntubation2: action.payload
            }
        case SET_LARYNGOSCOPE_MAIN_2:
            return {
                ...state,
                laryngoscopeType2: action.payload
            }
        case SET_LARYNGOSCOPE_SUB_TYPE_2:
            return {
                ...state,
                laryngoscopeSubType2: action.payload
            }
        case SET_LARYNGOSCOPE_SUB_SUB_TYPE_2:
            return {
                ...state,
                laryngoscopeSubSubType2: action.payload
            }
        case SET_AIRWAY_ADJUNCT_2:
            return {
                ...state,
                airwayAdjunct2: action.payload
            }
        case SET_AIRWAY_ADJUNCT_TYPE_2:
            return {
                ...state,
                airwayAdjunctType2: action.payload
            }
        case SET_AIRWAY_OTHER_2:
            return {
                ...state,
                airwayOther2: action.payload
            }
        case SET_AIRWAY_CALCULATORS_2:
            return {
                ...state,
                airwayCalc2: action.payload
            }
        case SET_AIRWAY_NOTES_2:
            return {
                ...state,
                airwayNotes2: action.payload
            }
        default: return state
    }
}


export default PostopAirwayReducer