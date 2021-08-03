import { SET_AIRWAY_ADJUNCT, SET_AIRWAY_ADJUNCT_TYPE, SET_AIRWAY_CALCULATORS, SET_AIRWAY_NOTES, SET_AIRWAY_OTHER, SET_INTUBATION, SET_LARYNGOSCOPE_MAIN, SET_LARYNGOSCOPE_SUB_SUB_TYPE, SET_LARYNGOSCOPE_SUB_TYPE, SET_LMA, SET_LUNG_INTUBATION, SET_LUNG_SUB_INTUBATION, SET_LUNG_SUB_SUB_INTUBATION, SET_MASK, SET_SUB_INTUBATION } from "./AirwayTypes"

export const setMask = mask => {
    return {
        type: SET_MASK,
        payload: mask
    }
}

export const setLma = Lma => {
    return {
        type: SET_LMA,
        payload: Lma
    }
}

export const setIntubation = intubation => {
    return {
        type: SET_INTUBATION,
        payload: intubation
    }
}

export const setSubIntubation = subIntubation => {
    return {
        type: SET_SUB_INTUBATION,
        payload: subIntubation
    }
}

export const setLungIntubation = lungIntubation => {
    return {
        type: SET_LUNG_INTUBATION,
        payload: lungIntubation
    }
}

export const setLungSubIntubation = lungSubIntubation => {
    return {
        type: SET_LUNG_SUB_INTUBATION,
        payload: lungSubIntubation
    }
}

export const setLungSubSubIntubation = lungSubSubIntubation => {
    return {
        type: SET_LUNG_SUB_SUB_INTUBATION,
        payload: lungSubSubIntubation
    }
}

export const setLaryngoscopeMain = laryngoscopeType => {
    return {
        type: SET_LARYNGOSCOPE_MAIN,
        payload: laryngoscopeType
    }
}

export const setLaryngoscopeSubType = laryngoscopeSubType => {
    return {
        type: SET_LARYNGOSCOPE_SUB_TYPE,
        payload: laryngoscopeSubType
    }
}

export const setLaryngoscopeSubSubType = laryngoscopeSubSubType => {
    return {
        type: SET_LARYNGOSCOPE_SUB_SUB_TYPE,
        payload: laryngoscopeSubSubType
    }
}

export const setAirwayAdjunct = airwayAdjunct => {
    return {
        type: SET_AIRWAY_ADJUNCT,
        payload: airwayAdjunct
    }
}

export const setAirwayAdjunctType = airwayAdjunctType => {
    return {
        type: SET_AIRWAY_ADJUNCT_TYPE,
        payload: airwayAdjunctType
    }
}

export const setAirwayOther = airwayOther => {
    return {
        type: SET_AIRWAY_OTHER,
        payload: airwayOther
    }
}

export const setAirwayCalc = airwayCalc => {
    return {
        type: SET_AIRWAY_CALCULATORS,
        payload: airwayCalc
    }
}

export const setAirwayNotes = airwayNotes => {
    return {
        type: SET_AIRWAY_NOTES,
        payload: airwayNotes
    }
}