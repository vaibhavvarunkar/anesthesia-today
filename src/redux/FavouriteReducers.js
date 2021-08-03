import { SET_EXTRA_FAVOURITES,SET_ACTION_SUMMARY_CATEGORY,SET_ACTION_SUMMARY_TYPE } from "./FavouriteTypes"

const initialState = {
    favourites: [],
    actionSummaryType:"",
    categorySelected:""
  
}

const FavouriteReducers = (state = initialState, action) => {
    switch (action.type) {
        case SET_EXTRA_FAVOURITES:
            return {
                ...state,
                favourites: action.payload
            }
        case SET_ACTION_SUMMARY_TYPE:
            return{
                ...state,
                actionSummaryType:action.payload
            }
        case SET_ACTION_SUMMARY_CATEGORY:
            return{
                ...state,
                categorySelected:action.payload
            }
        default: return state
    }
}

export default FavouriteReducers