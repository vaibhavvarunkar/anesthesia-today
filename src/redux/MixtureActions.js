import { SET_MIXTURE_CONCENTRATION, SET_MIXTURE_DOSE, SET_MIXTURE_RATIO } from "./MixtureTypes"

export const setMixDose = mixDose => {
    return {
        type: SET_MIXTURE_DOSE,
        payload: mixDose
    }
}

export const setMixConcentration = mixConc => {
    return {
        type: SET_MIXTURE_CONCENTRATION,
        payload: mixConc
    }
}

export const setMixtureRatio = mixRatio => {
    return {
        type: SET_MIXTURE_RATIO,
        payload: mixRatio
    }
}