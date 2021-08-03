import { SET_AIRWAY_ADJUNCT_2, SET_AIRWAY_ADJUNCT_TYPE_2, SET_AIRWAY_CALCULATORS_2, SET_AIRWAY_NOTES_2, SET_AIRWAY_OTHER_2, SET_INTUBATION_2, SET_LARYNGOSCOPE_MAIN_2, SET_LARYNGOSCOPE_SUB_SUB_TYPE_2, SET_LARYNGOSCOPE_SUB_TYPE_2, SET_LMA_2, SET_LUNG_INTUBATION_2, SET_LUNG_SUB_INTUBATION_2, SET_LUNG_SUB_SUB_INTUBATION_2, SET_MASK_2, SET_SUB_INTUBATION_2 } from "./PostopAirwayTypes"

export const SetMask2 = mask2 => {
    return {
        type: SET_MASK_2,
        payload: mask2
    }
}

export const setLma2 = Lma2 => {
    return {
        type: SET_LMA_2,
        payload: Lma2
    }
}

export const setIntubation2 = intubation2 => {
    return {
        type: SET_INTUBATION_2,
        payload: intubation2
    }
}

export const setSubIntubation2 = subIntubation2 => {
    return {
        type: SET_SUB_INTUBATION_2,
        payload: subIntubation2
    }
}

export const setLungIntubation2 = lungIntubation2 => {
    return {
        type: SET_LUNG_INTUBATION_2,
        payload: lungIntubation2
    }
}

export const setLungSubIntubation2 = lungSubIntubation2 => {
    return {
        type: SET_LUNG_SUB_INTUBATION_2,
        payload: lungSubIntubation2
    }
}

export const setLungSubSubIntubation2 = lungSubSubIntubation2 => {
    return {
        type: SET_LUNG_SUB_SUB_INTUBATION_2,
        payload: lungSubSubIntubation2
    }
}

export const setLaryngoscopeMain2 = laryngoscopeType2 => {
    return {
        type: SET_LARYNGOSCOPE_MAIN_2,
        payload: laryngoscopeType2
    }
}

export const setLaryngoscopeSubType2 = laryngoscopeSubType2 => {
    return {
        type: SET_LARYNGOSCOPE_SUB_TYPE_2,
        payload: laryngoscopeSubType2
    }
}

export const setLaryngoscopeSubSubType2 = laryngoscopeSubSubType2 => {
    return {
        type: SET_LARYNGOSCOPE_SUB_SUB_TYPE_2,
        payload: laryngoscopeSubSubType2
    }
}

export const setAirwayAdjunct2 = airwayAdjunct2 => {
    return {
        type: SET_AIRWAY_ADJUNCT_2,
        payload: airwayAdjunct2
    }
}

export const setAirwayAdjunctType2 = airwayAdjunctType2 => {
    return {
        type: SET_AIRWAY_ADJUNCT_TYPE_2,
        payload: airwayAdjunctType2
    }
}

export const setAirwayOther2 = airwayOther2 => {
    return {
        type: SET_AIRWAY_OTHER_2,
        payload: airwayOther2
    }
}

export const setAirwayCalc2 = airwayCalc2 => {
    return {
        type: SET_AIRWAY_CALCULATORS_2,
        payload: airwayCalc2
    }
}

export const setAirwayNotes2 = airwayNotes2 => {
    return {
        type: SET_AIRWAY_NOTES_2,
        payload: airwayNotes2
    }
}