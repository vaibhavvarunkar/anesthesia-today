import { SET_AIRWAY_ADJUNCT_3, SET_AIRWAY_ADJUNCT_TYPE_3, SET_AIRWAY_CALCULATORS_3, SET_AIRWAY_NOTES_3, SET_AIRWAY_OTHER_3, SET_INTUBATION_3, SET_LARYNGOSCOPE_MAIN_3, SET_LARYNGOSCOPE_SUB_SUB_TYPE_3, SET_LARYNGOSCOPE_SUB_TYPE_3, SET_LMA_3, SET_LUNG_INTUBATION_3, SET_LUNG_SUB_INTUBATION_3, SET_LUNG_SUB_SUB_INTUBATION_3, SET_MASK_3, SET_SUB_INTUBATION_3 } from "./EmergencyAirwayTypes"

export const setMask3 = mask3 => {
    return {
        type: SET_MASK_3,
        payload: mask3
    }
}

export const setLma3 = Lma3 => {
    return {
        type: SET_LMA_3,
        payload: Lma3
    }
}

export const setIntubation3 = intubation3 => {
    return {
        type: SET_INTUBATION_3,
        payload: intubation3
    }
}

export const setSubIntubation3 = subIntubation3 => {
    return {
        type: SET_SUB_INTUBATION_3,
        payload: subIntubation3
    }
}

export const setLungIntubation3 = lungIntubation3 => {
    return {
        type: SET_LUNG_INTUBATION_3,
        payload: lungIntubation3
    }
}

export const setLungSubIntubation3 = lungSubIntubation3 => {
    return {
        type: SET_LUNG_SUB_INTUBATION_3,
        payload: lungSubIntubation3
    }
}

export const setLungSubSubIntubation3 = lungSubSubIntubation3 => {
    return {
        type: SET_LUNG_SUB_SUB_INTUBATION_3,
        payload: lungSubSubIntubation3
    }
}

export const setLaryngoscopeMain3 = laryngoscopeType3 => {
    return {
        type: SET_LARYNGOSCOPE_MAIN_3,
        payload: laryngoscopeType3
    }
}

export const setLaryngoscopeSubType3 = laryngoscopeSubType3 => {
    return {
        type: SET_LARYNGOSCOPE_SUB_TYPE_3,
        payload: laryngoscopeSubType3
    }
}

export const setLaryngoscopeSubSubType3 = laryngoscopeSubSubType3 => {
    return {
        type: SET_LARYNGOSCOPE_SUB_SUB_TYPE_3,
        payload: laryngoscopeSubSubType3
    }
}

export const setAirwayAdjunct3 = airwayAdjunct3 => {
    return {
        type: SET_AIRWAY_ADJUNCT_3,
        payload: airwayAdjunct3
    }
}

export const setAirwayAdjunctType3 = airwayAdjunctType3 => {
    return {
        type: SET_AIRWAY_ADJUNCT_TYPE_3,
        payload: airwayAdjunctType3
    }
}

export const setAirwayOther3 = airwayOther3 => {
    return {
        type: SET_AIRWAY_OTHER_3,
        payload: airwayOther3
    }
}

export const setAirwayCalc3 = airwayCalc3 => {
    return {
        type: SET_AIRWAY_CALCULATORS_3,
        payload: airwayCalc3
    }
}

export const setAirwayNotes3 = airwayNotes3 => {
    return {
        type: SET_AIRWAY_NOTES_3,
        payload: airwayNotes3
    }
}