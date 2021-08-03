
import { SET_ADMINISTRATION_VOLUME, SET_CONCENTRATION, SET_DOSE, SET_LAMAX_COMORBITIES, SET_LAMAX_WEIGHT_TYPE, SET_PATIENT_WEIGHT } from "./LamaxTypes"

// const doseArray = []

export const setDose = dose => {
    // doseArray.push(dose)
    return {
        type: SET_DOSE,
        payload: dose
    }
}

export const setConcentration = conc => {
    return {
        type: SET_CONCENTRATION,
        payload: conc
    }
}

export const setPatientWeight = weightType => {
    return {
        type: SET_PATIENT_WEIGHT,
        payload: weightType
    }
}

export const setLamaxWeightType = lamaxWeightType => {
    return {
        type: SET_LAMAX_WEIGHT_TYPE,
        payload: lamaxWeightType
    }
}

export const setLamaxComorbities = lamaxComborbities => {
    return {
        type: SET_LAMAX_COMORBITIES,
        payload: lamaxComborbities
    }
}

export const setAdminVolume = adminVolume => {
    return {
        type: SET_ADMINISTRATION_VOLUME,
        payload: adminVolume
    }
}