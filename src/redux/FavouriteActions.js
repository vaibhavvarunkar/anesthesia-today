import {SET_EXTRA_FAVOURITES,SET_ACTION_SUMMARY_CATEGORY,SET_ACTION_SUMMARY_TYPE} from './FavouriteTypes'

export const setExtraFavourites=(allFavourite)=>{
    return {
        type: SET_EXTRA_FAVOURITES,
        payload: allFavourite
    }
}

export const setActionSummaryType=(ActionSummaryType)=>{
    return {
        type: SET_ACTION_SUMMARY_TYPE,
        payload: ActionSummaryType
    }
}

export const setActionSummaryCategory=(ActionSummaryCategory)=>{
    return {
        type: SET_ACTION_SUMMARY_CATEGORY,
        payload: ActionSummaryCategory
    }
}
