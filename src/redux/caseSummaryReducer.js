import { SET_AGEE, SET_AGEE_TYPE, SET_ANAESTHASIA_TYPE, SET_ASAPS, SET_CATEGORY_SURGERY_NAME, SET_EMERGENCY, SET_GENDER_TYPE, SET_MEDICAL_HISTORY, SET_MEDICATION, SET_PATIENT_HEIGHT, SET_PATIENT_HEIGHT_TYPE, SET_PATIENT_TYPE, SET_PATIENT_WEIGHT, SET_PATIENT_WEIGHT_TYPE, SET_SUB_SURGERY_NAME, SET_SURGERY_NAME, SET_NON_LISTED_MEDICATION, SET_LAST_FOOD_TIME, SET_TIME_TYPE, SET_INDIGESTED_MATERIAL, SET_ALLERGIES, SET_SUB_ANAESTHASIA_TYPE, SET_NOT_LISTED_ALLERGIES, SET_SURGERY_HISTORY_NAME, SET_SUB_SURGERY_HISTORY_NAME, SET_NON_LISTED_SURGERY_HISTORY_NAME, SET_ANAESTHASIA_HISTORY, SET_ANESTHASIA_HISTORY, SET_ANESTHASIA_INPUT, SET_ANESTHASIA_INPUT_FAMILY, SET_SUB_SUB_ANAESTHASIA_TYPE, SET_SUB_SUB_SUB_ANAESTHASIA_TYPE, SET_SUB_SUB_SURGERY_HISTORY_NAME } from "./caseSummaryTypes"

const initialState = {
    agee: "",
    ageeType: [],
    genderType: [],
    patientsType: [],
    patientsHeight: "",
    patientsHeightType: [],
    patientsWeight: "",
    patientsWeightType: [],
    patientsAsap: [],
    patientsEmergency: "",
    surgeryName: "",
    subSurgeryName: "",
    categorySurgeryName: "",
    anesthasiaType: [],
    anesthasiaSubSubType: [],
    anesthasiaSubSubSubType: [],
    anesthasiaSubType: [],
    choiceAnswer: [],
    medicationAnswer: [],
    nonListedMedication: "",
    lastTimeFood: "",
    foodTimeType: "",
    indigestedMaterial: "",
    patientAllergies: [],
    nonListedAllergies: "",
    surgeryHistoryName: "",
    surgerySubHistoryName: "",
    surgerySubSubHistoryName: "",
    surgerySubSubHistoryName: "",
    surgeryNonListedHistoryName: "",
    anesthasiaHistoryAnswers: [],
    anesthasiaInput: "",
    anesthasiaInputFam: "",
}

const caseSummaryReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AGEE:
            return {
                ...state,
                agee: action.payload
            }
        case SET_AGEE_TYPE:
            return {
                ...state,
                ageeType: action.payload
            }
        case SET_GENDER_TYPE:
            return {
                ...state,
                genderType: action.payload
            }
        case SET_PATIENT_TYPE:
            return {
                ...state,
                patientsType: action.payload
            }
        case SET_PATIENT_HEIGHT:
            return {
                ...state,
                patientsHeight: action.payload
            }
        case SET_PATIENT_HEIGHT_TYPE:
            return {
                ...state,
                patientsHeightType: action.payload
            }
        case SET_PATIENT_WEIGHT:
            return {
                ...state,
                patientsWeight: action.payload
            }
        case SET_PATIENT_WEIGHT_TYPE:
            return {
                ...state,
                patientsWeightType: action.payload
            }
        case SET_ASAPS:
            return {
                ...state,
                patientsAsap: action.payload
            }
        case SET_EMERGENCY:
            return {
                ...state,
                patientsEmergency: action.payload
            }
        case SET_SURGERY_NAME:
            return {
                ...state,
                surgeryName: action.payload
            }
        case SET_SUB_SURGERY_NAME:
            return {
                ...state,
                subSurgeryName: action.payload
            }
        case SET_CATEGORY_SURGERY_NAME:
            return {
                ...state,
                categorySurgeryName: action.payload
            }
        case SET_ANAESTHASIA_TYPE:
            return {
                ...state,
                anesthasiaType: action.payload
            }
        case SET_SUB_ANAESTHASIA_TYPE:
            return {
                ...state,
                anesthasiaSubType: action.payload
            }
        case SET_SUB_SUB_ANAESTHASIA_TYPE:
            return {
                ...state,
                anesthasiaSubSubType: action.payload
            }
        case SET_SUB_SUB_SUB_ANAESTHASIA_TYPE:
            return {
                ...state,
                anesthasiaSubSubSubType: action.payload
            }
        case SET_MEDICAL_HISTORY:
            return {
                ...state,
                choiceAnswer: action.payload
            }
        case SET_MEDICATION:
            return {
                ...state,
                medicationAnswer: action.payload
            }
        case SET_NON_LISTED_MEDICATION:
            return {
                ...state,
                nonListedMedication: action.payload
            }
        case SET_LAST_FOOD_TIME:
            return {
                ...state,
                lastTimeFood: action.payload
            }
        case SET_TIME_TYPE:
            return {
                ...state,
                foodTimeType: action.payload
            }
        case SET_INDIGESTED_MATERIAL:
            return {
                ...state,
                indigestedMaterial: action.payload
            }
        case SET_ALLERGIES:
            return {
                ...state,
                patientAllergies: action.payload
            }
        case SET_NOT_LISTED_ALLERGIES:
            return {
                ...state,
                nonListedAllergies: action.payload
            }
        case SET_SURGERY_HISTORY_NAME:
            return {
                ...state,
                surgeryHistoryName: action.payload
            }
        case SET_SUB_SURGERY_HISTORY_NAME:
            return {
                ...state,
                surgerySubHistoryName: action.payload
            }
        case SET_SUB_SUB_SURGERY_HISTORY_NAME:
            return {
                ...state,
                surgerySubSubHistoryName: action.payload
            }
        case SET_NON_LISTED_SURGERY_HISTORY_NAME:
            return {
                ...state,
                surgeryNonListedHistoryName: action.payload
            }
        case SET_ANESTHASIA_HISTORY:
            return {
                ...state,
                anesthasiaHistoryAnswers: action.payload
            }
        case SET_ANESTHASIA_INPUT:
            return {
                ...state,
                anesthasiaInput: action.payload
            }
        case SET_ANESTHASIA_INPUT_FAMILY:
            return {
                ...state,
                anesthasiaInputFam: action.payload
            }
        default: return state
    }
}

export default caseSummaryReducer