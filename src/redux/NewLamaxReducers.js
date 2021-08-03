import { SET_DOC_VALUE1, SET_DOC_VALUE2, SET_MED_TYPE, SET_MED_TYPE2, SET_MIXTURE_VALUE_1, SET_MIXTURE_VALUE_2, SET_MIXTURE_VALUE_A, SET_MIXTURE_VALUE_B, SET_NEW_ADMIN_VALUE, SET_NEW_ADMIN_VALUE2, SET_NEW_COMORBITIES, SET_NEW_CONC, SET_NEW_CONC2, SET_NEW_DRUG_1, SET_NEW_DRUG_2, SET_NEW_GENDER_TYPE, SET_NEW_HEIGHT_TYPE, SET_NEW_LAMAX_HEIGHT, SET_NEW_LAMAX_WEIGHT, SET_NEW_WEIGHT_TYPE } from "./NewLamaxTypes"

const initial_state = {
    weight2: "",
    newWeightType: "",
    newComorbities: [],
    drug1: [],
    newConc: "",
    newAdminValue: "",
    drug2: [],
    newConc2: "",
    newAdminValue2: "",
    height2: "",
    newHeightType: "",
    newGenderValue: "",
    medType: "",
    medType2: "",
    docValue1: "",
    docValue2: "",
    mixValueA: [],
    mixValueB: [],
}

const NewLamaxReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_NEW_LAMAX_WEIGHT:
            return {
                ...state,
                weight2: action.payload
            }
        case SET_NEW_WEIGHT_TYPE:
            return {
                ...state,
                newWeightType: action.payload
            }
        case SET_NEW_LAMAX_HEIGHT:
            return {
                ...state,
                height2: action.payload
            }
        case SET_NEW_HEIGHT_TYPE:
            return {
                ...state,
                newHeightType: action.payload
            }
        case SET_NEW_COMORBITIES:
            return {
                ...state,
                newComorbities: action.payload
            }
        case SET_NEW_DRUG_1:
            return {
                ...state,
                drug1: action.payload
            }
        case SET_NEW_CONC:
            return {
                ...state,
                newConc: action.payload
            }
        case SET_NEW_ADMIN_VALUE:
            return {
                ...state,
                newAdminValue: action.payload
            }
        case SET_NEW_DRUG_2:
            return {
                ...state,
                drug2: action.payload
            }
        case SET_NEW_CONC2:
            return {
                ...state,
                newConc2: action.payload
            }
        case SET_NEW_ADMIN_VALUE2:
            return {
                ...state,
                newAdminValue2: action.payload
            }
        case SET_NEW_GENDER_TYPE:
            return {
                ...state,
                newGenderValue: action.payload
            }
        case SET_MED_TYPE:
            return {
                ...state,
                medType: action.payload
            }
        case SET_MED_TYPE2:
            return {
                ...state,
                medType2: action.payload
            }
        case SET_DOC_VALUE1:
            return {
                ...state,
                docValue1: action.payload
            }
        case SET_DOC_VALUE2:
            return {
                ...state,
                docValue2: action.payload
            }
        case SET_MIXTURE_VALUE_A:
            return {
                ...state,
                mixValueA: action.payload
            }
        case SET_MIXTURE_VALUE_B:
            return {
                ...state,
                mixValueB: action.payload
            }
        default: return state
    }
}

export default NewLamaxReducer
