import { createStore, combineReducers } from "redux"
// import thunk from "redux-thunk"
import caseSummaryReducer from "./caseSummaryReducer"
import actionSummaryReducers from './ActionSummaryReducer'
import lamaxReducer from "./LamaxReducers"
import mixReducer from "./MixtureReducers"
import PhysicalExamReducer from './PhysicalExamReducer'
import AirwayReducer from "./AirwayReducers"
import NewLamaxReducer from "./NewLamaxReducers"
import FavouriteReducers from './FavouriteReducers'
import PostopAirwayReducer from "./PostopAirwayReducer"
import AirwayReducer3 from "./EmergencyAirwayReducer"
const rootReducer = combineReducers({
    casesummary: caseSummaryReducer,
    actionSummary: actionSummaryReducers,
    lamax: lamaxReducer,
    mixture: mixReducer,
    physicalReducer: PhysicalExamReducer,
    AirReducer: AirwayReducer,
    newLamax: NewLamaxReducer,
    favourite: FavouriteReducers,
    PostopAirwayReducer: PostopAirwayReducer,
    AirwayReducer3: AirwayReducer3

})

const store = createStore(rootReducer
    , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store