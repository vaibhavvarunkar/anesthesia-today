import { SET_DOC_VALUE1, SET_DOC_VALUE2, SET_MED_TYPE, SET_MED_TYPE2, SET_MIXTURE_VALUE_1, SET_MIXTURE_VALUE_2, SET_MIXTURE_VALUE_A, SET_MIXTURE_VALUE_B, SET_NEW_ADMIN_VALUE, SET_NEW_ADMIN_VALUE2, SET_NEW_COMORBITIES, SET_NEW_CONC, SET_NEW_CONC2, SET_NEW_DRUG_1, SET_NEW_DRUG_2, SET_NEW_GENDER_TYPE, SET_NEW_HEIGHT_TYPE, SET_NEW_LAMAX_HEIGHT, SET_NEW_LAMAX_WEIGHT, SET_NEW_WEIGHT_TYPE } from "./NewLamaxTypes"

export const setNewLamaxWeight = weight2 => {
    return {
        type: SET_NEW_LAMAX_WEIGHT,
        payload: weight2
    }
}
export const setNewWeightType = newWeightType => {
    return {
        type: SET_NEW_WEIGHT_TYPE,
        payload: newWeightType
    }
}

export const setNewLamaxHeight = height2 => {
    return {
        type: SET_NEW_LAMAX_HEIGHT,
        payload: height2
    }
}
export const setNewHeightType = newHeightType => {
    return {
        type: SET_NEW_HEIGHT_TYPE,
        payload: newHeightType
    }
}

export const setNewComorbities = newComorbities => {
    return {
        type: SET_NEW_COMORBITIES,
        payload: newComorbities
    }
}

export const setNewDrug1 = drug1 => {
    return {
        type: SET_NEW_DRUG_1,
        payload: drug1
    }
}

export const setNewConc = newConc => {
    return {
        type: SET_NEW_CONC,
        payload: newConc
    }
}

export const setNewAdminValue = newAdminValue => {
    return {
        type: SET_NEW_ADMIN_VALUE,
        payload: newAdminValue
    }
}

export const setNewDrug2 = drug2 => {
    return {
        type: SET_NEW_DRUG_2,
        payload: drug2
    }
}

export const setNewConc2 = newConc2 => {
    return {
        type: SET_NEW_CONC2,
        payload: newConc2
    }
}

export const setNewAdminValue2 = newAdminValue2 => {
    return {
        type: SET_NEW_ADMIN_VALUE2,
        payload: newAdminValue2
    }
}

export const setNewGenderType = newGenderValue => {
    return {
        type: SET_NEW_GENDER_TYPE,
        payload: newGenderValue
    }
}

export const setMedType = medType => {
    return {
        type: SET_MED_TYPE,
        payload: medType
    }
}

export const setMedType2 = medType2 => {
    return {
        type: SET_MED_TYPE2,
        payload: medType2
    }
}

export const setDocValue1 = docValue1 => {
    return {
        type: SET_DOC_VALUE1,
        payload: docValue1
    }
}

export const setDocValue2 = docValue2 => {
    return {
        type: SET_DOC_VALUE2,
        payload: docValue2
    }
}

export const setmixtureValueA = mixValueA => {
    return {
        type: SET_MIXTURE_VALUE_A,
        payload: mixValueA
    }
}
export const setmixtureValueB = mixValueB => {
    return {
        type: SET_MIXTURE_VALUE_B,
        payload: mixValueB
    }
}