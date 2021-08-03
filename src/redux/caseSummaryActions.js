import { SET_AGEE, SET_AGEE_TYPE, SET_ANAESTHASIA_TYPE, SET_ASAPS, SET_NOT_LISTED_ALLERGIES, SET_CATEGORY_SURGERY_NAME, SET_EMERGENCY, SET_GENDER_TYPE, SET_MEDICAL_HISTORY, SET_PATIENT_HEIGHT, SET_PATIENT_HEIGHT_TYPE, SET_PATIENT_TYPE, SET_PATIENT_WEIGHT, SET_PATIENT_WEIGHT_TYPE, SET_SUB_SURGERY_NAME, SET_SURGERY_NAME, SET_MEDICATION, SET_NON_LISTED_MEDICATION, SET_LAST_FOOD_TIME, SET_TIME_TYPE, SET_INDIGESTED_MATERIAL, SET_ALLERGIES, SET_SUB_ANAESTHASIA_TYPE, SET_SURGERY_HISTORY_NAME, SET_SUB_SURGERY_HISTORY_NAME, SET_NON_LISTED_SURGERY_HISTORY_NAME, SET_ANESTHASIA_HISTORY, SET_ANESTHASIA_INPUT, SET_ANESTHASIA_INPUT_FAMILY, SET_SUB_SUB_ANAESTHASIA_TYPE, SET_SUB_SUB_SUB_ANAESTHASIA_TYPE, SET_SUB_SUB_SURGERY_HISTORY_NAME } from "./caseSummaryTypes"

const medicalHistory = []
const medicationArray = []
const anesthasiaHistoryArray = []

export const setAgee = agee => {
    return {
        type: SET_AGEE,
        payload: agee
    }
}

export const setAgeType = ageeType => {
    return {
        type: SET_AGEE_TYPE,
        payload: ageeType
    }
}

export const setGenderType = genderType => {
    return {
        type: SET_GENDER_TYPE,
        payload: genderType
    }
}

export const setPatientsType = patientsType => {
    return {
        type: SET_PATIENT_TYPE,
        payload: patientsType
    }
}

export const setPatientHeight = patientsHeight => {
    return {
        type: SET_PATIENT_HEIGHT,
        payload: patientsHeight
    }
}

export const setPatientHeightType = patientsHeightType => {
    return {
        type: SET_PATIENT_HEIGHT_TYPE,
        payload: patientsHeightType
    }
}

export const setPatientWeight = patientsWeight => {
    return {
        type: SET_PATIENT_WEIGHT,
        payload: patientsWeight
    }
}

export const setPatientWeightType = patientsWeightType => {
    return {
        type: SET_PATIENT_WEIGHT_TYPE,
        payload: patientsWeightType
    }
}

export const setAsaps = patientsAsaps => {
    return {
        type: SET_ASAPS,
        payload: patientsAsaps
    }
}

export const setEmergency = patientsEmergency => {
    return {
        type: SET_EMERGENCY,
        payload: patientsEmergency
    }
}

export const setSurgeryName = surgeryName => {
    return {
        type: SET_SURGERY_NAME,
        payload: surgeryName
    }
}

export const setSubSurgeryName = subSurgeryName => {
    return {
        type: SET_SUB_SURGERY_NAME,
        payload: subSurgeryName
    }
}

export const setCategorySurgeryName = categorySurgeryName => {
    return {
        type: SET_CATEGORY_SURGERY_NAME,
        payload: categorySurgeryName
    }
}

export const setAnesthasiaType = anesthasiaType => {
    return {
        type: SET_ANAESTHASIA_TYPE,
        payload: anesthasiaType
    }
}

export const setSubAnesthasiaType = anesthasiaSubType => {
    return {
        type: SET_SUB_ANAESTHASIA_TYPE,
        payload: anesthasiaSubType
    }
}

export const setSubSubAnesthasiaType = anesthasiaSubSubType => {
    return {
        type: SET_SUB_SUB_ANAESTHASIA_TYPE,
        payload: anesthasiaSubSubType
    }
}

export const setSubSubSubAnesthasiaType = anesthasiaSubSubSubType => {
    return {
        type: SET_SUB_SUB_SUB_ANAESTHASIA_TYPE,
        payload: anesthasiaSubSubSubType
    }
}

export const setMedicalHistory = choiceAnswer => {
    medicalHistory.push(choiceAnswer)
    return {
        type: SET_MEDICAL_HISTORY,
        payload: medicalHistory
    }
}

export const setMedication = medicationAnswer => {
    medicationArray.push(medicationAnswer)
    return {
        type: SET_MEDICATION,
        payload: medicationArray
    }
}

export const setNonListedMedication = nonlistedMedication => {
    return {
        type: SET_NON_LISTED_MEDICATION,
        payload: nonlistedMedication
    }
}

export const setLastTimeFood = lastTimeFood => {
    return {
        type: SET_LAST_FOOD_TIME,
        payload: lastTimeFood
    }
}

export const setTimeType = foodTimeType => {
    return {
        type: SET_TIME_TYPE,
        payload: foodTimeType
    }
}

export const setIndigestedMaterial = indigestedMaterial => {
    return {
        type: SET_INDIGESTED_MATERIAL,
        payload: indigestedMaterial
    }
}

export const setAllergies = patientAllergies => {
    return {
        type: SET_ALLERGIES,
        payload: patientAllergies
    }
}

export const setNotListedAllergies = nonListedAllergies => {
    return {
        type: SET_NOT_LISTED_ALLERGIES,
        payload: nonListedAllergies

    }
}

export const setSurgeryHistoryName = surgeryHistoryName => {
    return {
        type: SET_SURGERY_HISTORY_NAME,
        payload: surgeryHistoryName
    }
}

export const setSubSurgeryHistoryName = surgerySubHistoryName => {
    return {
        type: SET_SUB_SURGERY_HISTORY_NAME,
        payload: surgerySubHistoryName
    }
}

export const setSubSubSurgeryHistoryName = surgerySubSubHistoryName => {
    return {
        type: SET_SUB_SUB_SURGERY_HISTORY_NAME,
        payload: surgerySubSubHistoryName
    }
}

export const setNonListedSurgeryHistoryName = surgeryNonListedHistoryName => {
    return {
        type: SET_NON_LISTED_SURGERY_HISTORY_NAME,
        payload: surgeryNonListedHistoryName
    }
}

export const setAnesthasiaHistory = anesthasiaHistoryAnswers => {
    anesthasiaHistoryArray.push(anesthasiaHistoryAnswers)
    return {
        type: SET_ANESTHASIA_HISTORY,
        payload: anesthasiaHistoryArray
    }
}

export const setAnesthasiaInput = anesthasiaInput => {
    return {
        type: SET_ANESTHASIA_INPUT,
        payload: anesthasiaInput
    }
}

export const setAnesthasiaInputFam = anesthasiaInputFam => {
    return {
        type: SET_ANESTHASIA_INPUT_FAMILY,
        payload: anesthasiaInputFam
    }
}

