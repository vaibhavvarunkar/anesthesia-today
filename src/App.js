import './App.css';
import './css/style.css'
import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import store from "./redux/store"
import { Provider } from "react-redux"
import Login from './Screen/login';
import IndexAfterLogin from './Screen/indexAfterLogin';
import Signup from './Screen/Signup';
import AllAction from './Screen/AllAction';
import CaseSummary from './Screen/CaseSummary';
import ForgotPassword from './Screen/ForgotPassword';
import MyProfile from './Screen/MyProfile';
import Change_pass from './Screen/Change_Pass';
import Notification from '../src/Screen/Notification'
import MySubcription from './Screen/MySubcription';
import EditProfile from './Screen/EditProfile';
import Subcription from './Screen/Subcription';
import Settings from './Screen/Settings';
import Feedback from './Screen/Feedback';
import SaveCases from './Screen/SaveCases';
import Home from './Screen/Home.js'
import About from './Screen/About';
import Contact from './Screen/Contact';
import Tnc from './Screen/Tnc';
import PrivacyPolicy from './Screen/PrivacyPolicy.js'
import ResultOfAction from './Screen/ResultOfActionLibrary';
import AllActionForActionSummary from './Screen/AllActionForActionSummary';
import ActionSummary from './Screen/ActionSummary';
import Favorites from './Screen/Favorites';
import Recent from './Screen/Recent';
import BurgerMenuScreen from './Screen/BurgerMenuScreen';
import CaseSummaryData from './Screen/CaseSummaryData';
import ActionSummaryData from './Screen/ActionSummaryData';
import Result from './Screen/Result';
import PreoperativeEvaluation from './Screen/PreoperativeEvaluation';
import RiskEvalution from './Screen/RiskEvalution';
import Rcri from './Screen/Rcri';
import PhysicalExam from './Screen/PhysicalExam';
import Premedication from './Screen/Premedication';
import Note from './Screen/Note';
import Airway from './Screen/Airway';
import VascularAcess from './Screen/VascularAccess';
import AnesthesiaType from './Screen/AnesthesiaType';
import CaseSummaryRedux from './Screen/CaseSummaryRedux';
import Maintainces from './Screen/Maintainces'
import Induction from './Screen/Induction';
import Emergence from './Screen/Emergence';
import EmergenceAirway from './Screen/EmergenceAirway';
import PostopAirway from './Screen/PostopAirway';
import Crises from './Screen/Crises';
import AfterLamax from './Screen/AfterLamax';
import SelectConcentrations from './Screen/SelectConcentrations';
import PatientProfile from './Screen/PatientProfile';
import SelectComoribities from './Screen/SelectComoribities';
import MaxDoses from './Screen/MaxDoses';
import AfterMaxDoses from './Screen/AfterMaxDoses';
import CrisesSubtype from './Screen/CrisesSubtype';
import CaseTipSubInfo from './Screen/CaseTipSubInfo';
import DrugInfo from './Screen/DrugInfo';
import Bradycardia from './Screen/Bradycardia';
import SubRegionalAnethesia from './Screen/SubRegionalAnethesia';
import NewAfterLamax from './Screen/NewAfterLamax';
import NewAfterLamax2 from './Screen/NewAfterLamax2';
import Positioning from './Screen/Positioning';
import Monitoring from './Screen/Monitoring';
import SpecialMonitoring from './Screen/SpecialMonitoring';
import Checklists from './Screen/Checklists';
import CaseTips from './Screen/CaseTips';
import Start from './Screen/Start';
import AfterPreop from './Screen/AfterPreop';
import Header from './CustomComponent/Header';
import AfterAirway from './Screen/AfterAirway';
function App() {





  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/index" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/termsandconditions" component={Tnc} />
          <Route exact path="/privacypolicy" component={PrivacyPolicy} />
          <Route exact path="/afterLogin" component={IndexAfterLogin} />
          <Route exact path="/favourite" component={Favorites} />
          <Route exact path="/allaction" component={AllAction} />
          <Route exact path="/startacase/casesummary" component={CaseSummaryRedux} />
          <Route exact path="/myprofile" component={MyProfile} />
          <Route exact path="/changepassword" component={Change_pass} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/mysubcription" component={MySubcription} />
          <Route exact path="/editprofile" component={EditProfile} />
          <Route exact path="/subcription" component={Subcription} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/feedback" component={Feedback} />
          <Route exact path="/savecases" component={SaveCases} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resultOfAction" component={ResultOfAction} />
          <Route exact path="/allactionforactionsummary" component={AllActionForActionSummary} />
          <Route exact path="/startacase/actionsummary" component={ActionSummary} />
          <Route exact path="/recent" component={Recent} />
          <Route exact path="/drawer" component={BurgerMenuScreen} />
          <Route exact path="/casesummarydata" component={CaseSummaryData} />
          <Route exact path="/actionummarydata" component={ActionSummaryData} />
          <Route exact path="/result" component={Result} />
          <Route exact path="/preoperativeevaluation" component={PreoperativeEvaluation} />
          <Route exact path="/riskevalution" component={RiskEvalution} />
          <Route exact path="/rcri" component={Rcri} />
          <Route exact path="/physicalexam" component={PhysicalExam} />
          <Route exact path="/premedication" component={Premedication} />
          <Route exact path="/note" component={Note} />
          <Route exact path="/airway" component={Airway} />
          <Route exact path="/vascularaccess" component={VascularAcess} />
          <Route exact path="/anesthesiatype" component={AnesthesiaType} />
          <Route exact path="/induction" component={Induction} />
          <Route exact path="/maintaince" component={Maintainces} />
          <Route exact path="/emergence" component={Emergence} />
          <Route exact path="/emergenceairway" component={EmergenceAirway} />
          <Route exact path="/postopairway" component={PostopAirway} />
          <Route exact path="/crises" component={Crises}></Route>
          <Route exact path="/afterlamax" component={AfterLamax}></Route>
          <Route exact path="/selecconcentrations" component={SelectConcentrations}></Route>
          <Route exact path="/patientprofile" component={PatientProfile}></Route>
          <Route exact path="/selectcomoribities" component={SelectComoribities}></Route>
          <Route exact path="/maxdoses" component={MaxDoses}></Route>
          <Route exact path="/aftermaxdoses" component={AfterMaxDoses}></Route>
          <Route exact path="/crisessubtype" component={CrisesSubtype} />
          <Route exact path="/casetipsubinfo" component={CaseTipSubInfo} />
          <Route exact path="/drugInfo" component={DrugInfo} />
          <Route exact path="/bradycardia" component={Bradycardia} />
          <Route exact path="/subRegionalAnesthesia" component={SubRegionalAnethesia} />
          <Route exact path="/newAfterLamax" component={NewAfterLamax} />
          <Route exact path="/newAfterLamax2" component={NewAfterLamax2} />
          <Route exact path="/positioning" component={Positioning} />
          <Route exact path="/monitoring" component={Monitoring} />
          <Route exact path="/specialmonitoring" component={SpecialMonitoring} />
          <Route exact path="/checklists" component={Checklists} />
          <Route exact path="/caseTips" component={CaseTips} />
          <Route exact path="/afterPreop" component={AfterPreop} />
          <Route exact path="/afterAirway" component={AfterAirway} />
        </Switch>


      </BrowserRouter>
    </Provider>

  );
}

export default App;
