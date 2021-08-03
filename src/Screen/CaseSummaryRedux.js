import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setAgee,
    setAgeType,
    setAllergies,
    setAnesthasiaHistory,
    setAnesthasiaInput,
    setAnesthasiaInputFam,
    setAnesthasiaType,
    setAsaps,
    setCategorySurgeryName,
    setEmergency,
    setGenderType,
    setIndigestedMaterial,
    setLastTimeFood,
    setMedicalHistory,
    setMedication,
    setNonListedMedication,
    setNonListedSurgeryHistoryName,
    setNotListedAllergies,
    setPatientHeight,
    setPatientHeightType,
    setPatientsType,
    setPatientWeight,
    setPatientWeightType,
    setSubAnesthasiaType,
    setSubSubAnesthasiaType,
    setSubSubSubAnesthasiaType,
    setSubSubSurgeryHistoryName,
    setSubSurgeryHistoryName,
    setSubSurgeryName,
    setSurgeryHistoryName,
    setSurgeryName,
    setTimeType,
} from '../redux/caseSummaryActions';
import '../css/AllAction.css';
import '../css/casesummary.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import SaveCaseModal from '../CustomComponent/SaveCaseModal';
import SaveCaseNameModal from '../CustomComponent/SaveCaseNameModal';
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal';
import { API_ROOT } from '../constants';

import "../css/CustomCaseSummaryHeader.css"
import axios from 'axios';

const optionsforage = [
    { value: 'Y', label: 'Year' },
    { value: 'M', label: 'Month' },
    { value: 'W', label: 'Week' },
    { value: 'D', label: 'Day' },
]
const optionsforgender = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
]

const optionsForHeight = [
    { value: 'Centimeters', label: 'Centimeters' },
    { value: 'Inches', label: 'Inches' },

]

const optionsForWeight = [
    { value: 'KG', label: 'Kilogram' },
    { value: 'LB', label: 'Pounds' },

]

const optionsforEmergency = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },

]

const optionForNPOStatus = [
    { value: 'Hours', label: 'Hours' },
    { value: 'Minutes', label: 'Minutes' }
]

// const ingestedMaterialArray = [
//     { label: 'Clear Fluid' },
//     { label: 'Breast Milk' },
//     { label: 'Infant Formula' },
//     { label: 'Non-human Milk' },
//     { label: 'Light Meal' },
//     { label: 'Heavy Meal' }
// ]

const CaseSummaryRedux = (props) => {
    ////////////////////////////////////////////////redux//////////////////////////////////////////////////////
    const allActionLibraryData = useSelector(state => state.actionSummary.allActionLibraryData);

    const agee = useSelector((state) => state.casesummary.agee);
    const genderType = useSelector((state) => state.casesummary.genderType);
    const ageeType = useSelector((state) => state.casesummary.ageeType);
    const patientsType = useSelector((state) => state.casesummary.patientsType);
    const patientsHeight = useSelector((state) => state.casesummary.patientsHeight);
    const patientsHeightType = useSelector((state) => state.casesummary.patientsHeightType);
    const patientsWeight = useSelector((state) => state.casesummary.patientsWeight);
    const patientsWeightType = useSelector((state) => state.casesummary.patientsWeightType);
    const patientsAsap = useSelector((state) => state.casesummary.patientsAsap);
    const patientsEmergency = useSelector((state) => state.casesummary.patientsEmergency);
    const surgeryName = useSelector((state) => state.casesummary.surgeryName);
    const subSurgeryName = useSelector((state) => state.casesummary.subSurgeryName);
    const categorySurgeryName = useSelector((state) => state.casesummary.categorySurgeryName);
    const anesthasiaType = useSelector((state) => state.casesummary.anesthasiaType)
    const anesthasiaSubType = useSelector((state) => state.casesummary.anesthasiaSubType)
    const medicationAnswer = useSelector(state => state.casesummary.medicationAnswer)
    const choiceAnswer = useSelector(state => state.casesummary.choiceAnswer)
    const nonListedMedication = useSelector(state => state.casesummary.nonListedMedication)
    const lastTimeFood = useSelector(state => state.casesummary.lastTimeFood)
    const foodTimeType = useSelector(state => state.casesummary.foodTimeType)
    const indigestedMaterial = useSelector(state => state.casesummary.indigestedMaterial)
    const patientAllergies = useSelector(state => state.casesummary.patientAllergies)
    const nonListedAllergies = useSelector(state => state.casesummary.nonListedAllergies)
    const surgeryHistoryName = useSelector(state => state.casesummary.surgeryHistoryName)
    const surgerySubHistoryName = useSelector(state => state.casesummary.surgerySubHistoryName)
    const surgeryNonListedHistoryName = useSelector(state => state.casesummary.surgeryNonListedHistoryName)
    const anesthasiaHistoryAnswers = useSelector(state => state.casesummary.anesthasiaHistoryAnswers)
    const anesthasiaInput = useSelector(state => state.casesummary.anesthasiaInput)
    const anesthasiaInputFam = useSelector(state => state.casesummary.anesthasiaInputFam)
    const dispatch = useDispatch();
    console.log(choiceAnswer);

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const [ageType, setageType] = useState(null);
    const [ageTypeDisplay, setageTypeDisplay] = useState(null);
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState(null);
    const [genderDisplay, setgenderDisplay] = useState(null);
    const [patientTypeArray, setpatientTypeArray] = useState([]);
    const [patientType, setPatientType] = useState(null);
    const [patientTypeDisplay, setpatientTypeDisplay] = useState([]);

    const [height, setHeight] = useState(null);

    const [weight, setWeight] = useState(null);
    const [surgeryTypeArray, setsurgeryTypeArray] = useState([]);
    const [surgeryType, setsurgeryType] = useState([]);
    const [sub_surgeryArray, setsub_surgeryArray] = useState([]);
    const [sub_surgeryArray2, setsub_surgeryArray2] = useState([]);
    const [sub_surgeryArray3, setsub_surgeryArray3] = useState([]);
    const [sub_surgeryArray4, setsub_surgeryArray4] = useState([]);
    const [sub_surgeryArray5, setsub_surgeryArray5] = useState([]);
    const [sub_surgeryArray6, setsub_surgeryArray6] = useState([]);
    const [surgerySubType, setsurgerySubType] = useState([]);
    const [anesthesia_type_list, setanesthesia_type_list] = useState([]);
    const [anesthesia_type, setanesthesia_type] = useState([]);
    const [anesthesiaSubType, setanesthesiaSubType] = useState([]);
    const [subanesthesia_type, setsubanesthesia_type] = useState([]);
    const [subanesthesia_type2, setsubanesthesia_type2] = useState([]);
    const [subanesthesia_type3, setsubanesthesia_type3] = useState([]);
    const [subanesthesia_type4, setsubanesthesia_type4] = useState([]);
    const [subQuestionClick, setsubQuestionClick] = useState(true);
    const [subQuestionNo, setsubQuestionNo] = useState(0);
    const [AsapaArray, setAsapaArray] = useState([]);
    const [asaps, setasaps] = useState([]);
    const [medicationsArray, setmedicationsArray] = useState([]);
    const [medication, setmedication] = useState([]);
    const [medicalHistory, setmedicalHistory] = useState([]);
    const [medicalSubHistory, setmedicalSubHistory] = useState([]);
    const [timeOfLastFoodOrDrink, settimeOfLastFoodOrDrink] = useState(null);
    const [ingestedMaterial, setingestedMaterial] = useState([]);
    const [nameVisble, setnameVisble] = useState(false);
    const [fileName, setFileName] = useState(null);
    const [surgeryHistoryArray, setsurgeryHistoryArray] = useState([]);

    const [surgeryHistory, setsurgeryHistory] = useState([]);
    const [sub_surgeryHistoryArray, setsub_surgeryHistoryArray] = useState([]);
    const [sub_surgeryHistoryArray2, setsub_surgeryHistoryArray2] = useState([]);
    const [sub_surgeryHistoryArray3, setsub_surgeryHistoryArray3] = useState([]);
    const [sub_surgeryHistoryArray4, setsub_surgeryHistoryArray4] = useState([]);
    const [sub_surgeryHistoryArray5, setsub_surgeryHistoryArray5] = useState([]);
    const [sub_surgeryHistoryArray6, setsub_surgeryHistoryArray6] = useState([]);
    const [surgerySubHistory, setsurgerySubHistory] = useState([]);
    // const [refresh, setRefresh] = useState({})

    const [anesethesiaHistory, setanesethesiaHistory] = useState([]);
    const [anesethesiaSubHistory, setanesethesiaSubHistory] = useState([]);
    const [medicalHistoryArray, setmedicalHistoryArray] = useState([]);
    const [AllegriesArray, setAllegriesArray] = useState([]);
    const [allegries, setallegries] = useState([]);
    const [heightType, setheightType] = useState(null);
    const [heightTypeDisplay, setheightTypeDisplay] = useState(null);
    const [weightType, setweightType] = useState(null);
    const [weightTypeDisplay, setweightTypeDisplay] = useState(null);
    const [surgeryMultiSelection, setsurgeryMultiSelection] = useState(false);
    const [burgerMenu, setburgerMenu] = useState(false);
    const [casesummary_id, setcasesummary_id] = useState(null);
    const [emergency, setemergency] = useState(null);
    const [npo_status_time_type, setnpo_status_time_type] = useState(null);
    const [otherMedicationArray, setotherMedicationArray] = useState([]);
    const [categoryValue, setcategoryValue] = useState(null);
    const [otherSurgeryHistoryArray, setotherSurgeryHistoryArray] = useState([]);
    const [otherAllegriesArray, setotherAllegriesArray] = useState([]);
    const [refreshPage, setrefreshPage] = useState({});
    const [otherSurgeryTypeArray, setotherSurgeryTypeArray] = useState([]);
    const [ingestedMaterialArray, setIngestedMaterialArray] = useState([]);
    const [subCategory, setsubCategory] = useState([])
    const [subId, setsubId] = useState(null)
    const [subName, setsubName] = useState(null)
    const [isSub, setSub] = useState(null)
    const [subsubCategory, setsubsubCategory] = useState([])
    const [subsub, setsubsub] = useState(null)
    const [subsubId, setsubsubId] = useState(null)
    const [subsubsub, setsubsubsub] = useState(null)
    const [subsubsubCategory, setsubsubsubCategory] = useState([])
    const [subnewPage, setsubnewPage] = useState(null)
    const [showinput, setshowinput] = useState(false)
    const [showinput2, setshowinput2] = useState(false)
    useEffect(() => {
        getCaseSummary();
    }, []);

    const onClickCategory = (name) => {
        setsubId(null)
        setsubName(name)
        for (var i = 0; i < allActionLibraryData.length; i++) {
            if (allActionLibraryData[i].name === name) {
                setsubCategory(allActionLibraryData[i].data)
                setSub(true)
            }
        }
    }

    const onClickSubCategory = (id, name, drug_name) => {
        setsubId(id)
        for (var i = 0; i < subCategory.length; i++) {
            if (subCategory[i].id === id && name === "Case Tips") {
                setsubsub(true)
                setsubsubCategory(subCategory[i].case_tip_sub_type)
            }
        }
    }

    const lastListClicked = (id, dataid, name, drug_name) => {
        setsubsubId(id)
        for (var i = 0; i < subsubCategory.length; i++) {
            if (subsubCategory[i].id === id && name === "Case Tips") {
                // console.log("run");
                setsubsubsub(true)
                setsubsubsubCategory(subsubCategory[i].case_tip_sub_type)
                // console.log(subsubCategory[i].case_tip_sub_type);
            }

        }
    }

    const handleNewPage = (id, name, subName) => {
        for (var i = 0; i < subsubsubCategory.length; i++) {
            if (subsubsubCategory[i].id === id && name === "Case Tips") {
                // console.log("run");
                // setsubsubsub(true)
                setsubnewPage(true)
                // setnewpagesubData(subsubsubCategory[i].case_tip_sub_type)
                // console.log((subsubsubCategory[i].case_tip_sub_type));
                props.history.push({
                    pathname: '/casetipsubinfo',
                    state: {
                        dataInfo: subsubsubCategory[i].case_tip_sub_type,
                        case_name: subName
                    }
                });
            }
        }

    }


    const getCaseSummary = async () => {
        var token = localStorage.getItem('token');

        fetch(
            API_ROOT + `case-summary-form-data?device_type=Android&device_token=123`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + token,
                },
            }
        )
            .then((response) => response.json())
            .then((res) => {
                console.log(res);
                if (res.status === 'true' && res.message === 'Case Summary Form Data') {
                    res.data.patientTypes.forEach((element) => {
                        element.value = element.id;
                        element.label = element.type_name;
                    });
                    setpatientTypeArray(res.data.patientTypes);
                    res.data.surgeryTypes.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    setsurgeryHistoryArray(res.data.surgeryTypes);
                    setsurgeryTypeArray(res.data.surgeryTypes);
                    res.data.anesthesiaTypes.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });
                    setanesthesia_type_list(res.data.anesthesiaTypes);

                    res.data.asaPs.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    setAsapaArray(res.data.asaPs);

                    res.data.drugList.forEach((element) => {
                        element.value = element.id;
                        element.label = element.drug_name;
                    });

                    setmedicationsArray(res.data.medications);

                    setmedicalHistory(res.data.medicalHistories);
                    res.data.allgeries.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    setAllegriesArray(res.data.allgeries);

                    res.data.anesthesiaHistories.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });
                    setanesethesiaHistory(res.data.anesthesiaHistories);
                    setIngestedMaterialArray(res.data.npoStatuses)
                }
            });
    };
    const handleChangeAgeTpe = (selectedOption) => {
        setageTypeDisplay(selectedOption);
        setageType(selectedOption.value);
    };

    const handleChangeGender = (selectedOption) => {
        setgenderDisplay(selectedOption);
        setGender(selectedOption.value);
    };

    const handleChangePatientType = (selectedOption) => {
        setpatientTypeDisplay(selectedOption);
        setPatientType(selectedOption.value);
    };

    const handleChangeHeightType = (selectedOption) => {
        setheightTypeDisplay(selectedOption);
        setheightType(selectedOption.value);
    };

    const handleChangeWeightType = (selectedOption) => {
        setweightTypeDisplay(selectedOption);
        setweightType(selectedOption.value);
    };

    const handleChangeSurgeryType = (selectedOption) => {
        dispatch(setSurgeryName(selectedOption));

        for (var j = 0; j < surgeryTypeArray.length; j++) {
            if (surgeryTypeArray[j].id === selectedOption.value) {
                //   console.log(surgeryTypeArray[j].surgery_sub_type);
                surgeryTypeArray[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });
                setsub_surgeryArray(surgeryTypeArray[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryType2 = (selectedOption) => {
        dispatch(setSubSurgeryName(selectedOption))
        for (var j = 0; j < sub_surgeryArray.length; j++) {
            if (sub_surgeryArray[j].id === selectedOption.value) {
                console.log(sub_surgeryArray[j].surgery_sub_type);
                sub_surgeryArray[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;

                });
                setsub_surgeryArray2(sub_surgeryArray[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryType3 = (selectedOption) => {
        dispatch(setCategorySurgeryName(selectedOption))
        for (var j = 0; j < sub_surgeryArray2.length; j++) {
            if (sub_surgeryArray2[j].id === selectedOption.value) {
                //  console.log(sub_surgeryArray2[j].surgery_sub_type);
                sub_surgeryArray2[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });
                setsub_surgeryArray3(sub_surgeryArray2[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryType4 = (selectedOption) => {

        for (var j = 0; j < sub_surgeryArray3.length; j++) {
            if (sub_surgeryArray3[j].id === selectedOption.value) {
                console.log(sub_surgeryArray3[j].surgery_sub_type);
                sub_surgeryArray3[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });
                setsub_surgeryArray4(sub_surgeryArray3[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryType5 = (selectedOption) => {
        console.log(selectedOption)
        dispatch(setSubSurgeryName(selectedOption));

        for (var j = 0; j < sub_surgeryArray4.length; j++) {
            if (sub_surgeryArray4[j].id === selectedOption.value) {
                console.log(sub_surgeryArray4[j].surgery_sub_type);
                sub_surgeryArray4[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });
                setsub_surgeryArray5(sub_surgeryArray4[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryType6 = (selectedOption) => {
        dispatch(setSubSurgeryName(selectedOption));

        console.log(selectedOption);
        setsurgerySubType(selectedOption);

    };


    const handleChangesub_surgeryType6 = (selectedOption) => {
        dispatch(setSubSurgeryName(selectedOption));

        console.log(selectedOption);
        setsurgerySubType(selectedOption);
    };


    const handleChangeAnesethesiaType = (selectedOption) => {
        dispatch(setAnesthasiaType(selectedOption));
        for (var j = 0; j < anesthesia_type_list.length; j++) {
            for (var i = 0; i < selectedOption.length; i++) {
                if (anesthesia_type_list[j].id === selectedOption[i].value) {
                    anesthesia_type_list[j].anesthesia_sub_type.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    console.log(anesthesia_type_list[j].anesthesia_sub_type);
                    if (subanesthesia_type.length === 0) {
                        setsubanesthesia_type(anesthesia_type_list[j].anesthesia_sub_type)
                        setrefreshPage({})
                    } else {
                        setsubanesthesia_type(subanesthesia_type.concat(anesthesia_type_list[j].anesthesia_sub_type))
                        setrefreshPage({})
                    }
                    // setsubanesthesia_type(anesthesia_type_list[j].anesthesia_sub_type);

                }
            }
        }
        // console.log(subanesthesia_type);
    };

    useEffect(() => {

    }, [refreshPage])


    const handleChangeAnesethesiaType2 = (selectedOption) => {
        dispatch(setSubAnesthasiaType(selectedOption));
        for (var j = 0; j < subanesthesia_type.length; j++) {
            for (var i = 0; i < selectedOption.length; i++) {
                if (subanesthesia_type[j].id === selectedOption[i].value) {
                    subanesthesia_type[j].anesthesia_sub_type.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    console.log(subanesthesia_type[j].anesthesia_sub_type);
                    if (subanesthesia_type2.length === 0) {
                        setsubanesthesia_type2(subanesthesia_type[j].anesthesia_sub_type)
                        setrefreshPage({})
                    } else {
                        setsubanesthesia_type2(subanesthesia_type2.concat(subanesthesia_type[j].anesthesia_sub_type))
                        setrefreshPage({})
                    }

                    // setsubanesthesia_type2(subanesthesia_type[j].anesthesia_sub_type);
                }
            }
        }
    };

    const handleChangeAnesethesiaType3 = (selectedOption) => {
        dispatch(setSubSubAnesthasiaType(selectedOption));
        for (var j = 0; j < subanesthesia_type2.length; j++) {
            for (var i = 0; i < selectedOption.length; i++) {
                if (subanesthesia_type2[j].id === selectedOption[i].value) {
                    subanesthesia_type2[j].anesthesia_sub_type.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    console.log(subanesthesia_type2[j].anesthesia_sub_type);
                    if (subanesthesia_type3.length === 0) {
                        setsubanesthesia_type3(subanesthesia_type2[j].anesthesia_sub_type)
                        setrefreshPage({})
                    } else {
                        setsubanesthesia_type3(subanesthesia_type3.concat(subanesthesia_type2[j].anesthesia_sub_type))
                        setrefreshPage({})
                    }

                    // setsubanesthesia_type3(subanesthesia_type2[j].anesthesia_sub_type);
                }
            }
        }
    };

    const handleChangeAnesethesiaType4 = (selectedOption) => {
        dispatch(setSubSubSubAnesthasiaType(selectedOption));
        for (var j = 0; j < subanesthesia_type3.length; j++) {
            for (var i = 0; i < selectedOption.length; i++) {
                if (subanesthesia_type3[j].id === selectedOption[i].value) {
                    subanesthesia_type3[j].anesthesia_sub_type.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    console.log(subanesthesia_type3[j].anesthesia_sub_type);
                    if (subanesthesia_type4.length === 0) {
                        setsubanesthesia_type4(subanesthesia_type3[j].anesthesia_sub_type)
                        setrefreshPage({})
                    } else {
                        setsubanesthesia_type4(subanesthesia_type4.concat(subanesthesia_type3[j].anesthesia_sub_type))
                        setrefreshPage({})
                    }
                    // setsubanesthesia_type4(subanesthesia_type3[j].anesthesia_sub_type);
                }
            }
        }
    };

    const handleChangesub_anesthesia_type = (selectedOption) => {
        setanesthesiaSubType(selectedOption);
    };

    const handleChangesub_asapa = (selectedOption) => {
        setasaps(selectedOption);
    };

    const handleChangeMedication = (selectedOption) => {
        setmedication(selectedOption);
    };

    const handleChangeSurgeryHistory = (selectedOption) => {
        dispatch(setSurgeryHistoryName(selectedOption));
        for (var j = 0; j < surgeryHistoryArray.length; j++) {
            if (surgeryHistoryArray[j].id === selectedOption.value) {
                surgeryHistoryArray[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });

                setsub_surgeryHistoryArray(surgeryHistoryArray[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryHistory2 = (selectedOption) => {
        dispatch(setSubSurgeryHistoryName(selectedOption));
        for (var j = 0; j < sub_surgeryHistoryArray.length; j++) {
            if (sub_surgeryHistoryArray[j].id === selectedOption.value) {
                sub_surgeryHistoryArray[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });
                setsub_surgeryHistoryArray2(sub_surgeryHistoryArray[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryHistory3 = (selectedOption) => {
        dispatch(setSubSubSurgeryHistoryName(selectedOption));
        for (var j = 0; j < sub_surgeryHistoryArray2.length; j++) {
            if (sub_surgeryHistoryArray2[j].id === selectedOption.value) {
                sub_surgeryHistoryArray2[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });

                setsub_surgeryHistoryArray3(sub_surgeryHistoryArray2[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryHistory4 = (selectedOption) => {
        dispatch(setSurgeryHistoryName(selectedOption));
        for (var j = 0; j < sub_surgeryHistoryArray3.length; j++) {
            if (sub_surgeryHistoryArray3[j].id === selectedOption.value) {
                sub_surgeryHistoryArray3[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });

                setsub_surgeryHistoryArray4(sub_surgeryHistoryArray3[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryHistory5 = (selectedOption) => {
        console.log(selectedOption)
        dispatch(setSubSurgeryHistoryName(selectedOption));
        for (var j = 0; j < sub_surgeryHistoryArray4.length; j++) {
            if (sub_surgeryHistoryArray4[j].id === selectedOption.value) {
                sub_surgeryHistoryArray4[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });

                setsub_surgeryHistoryArray5(sub_surgeryHistoryArray4[j].surgery_sub_type);
            }
        }
    };

    const handleChangesub_surgeryHistory = (selectedOption) => {
        setsurgerySubHistory(selectedOption);
    };

    const handleChangeAnesethesiaHistory = (selectedOption) => {
        setanesethesiaSubHistory(selectedOption);
    };

    const handleChangeAllegries = (selectedOption) => {
        setAllergies(selectedOption);
    };

    const nextBtnClick = () => {
        setquestinNo(questinNo + 1);
    };

    const backBtnClick = () => {
        setquestinNo(0);
    };

    const prevBtnClick = () => {
        setquestinNo(questinNo - 1);
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const nameModalVisible = () => {
        console.log("run");
        closeModal();
        setnameVisble(true);
    };

    const handleChangeEmergency = (value) => {
        setemergency(value.value);
    };

    const handleChangeNPOStatus = (value) => {
        setnpo_status_time_type(value);
    };

    const callToCaseSummary = () => {
        let asa_ps_data = []
        if (patientsAsap !== null) {
            let objforasa_ps_data = {
                id: '',
                emergency: ''
            }
            objforasa_ps_data.id = patientsAsap.id
            objforasa_ps_data.emergency = patientsEmergency.value
            asa_ps_data.push(objforasa_ps_data)
        }
        let surgery_types_data = []
        if (subSurgeryName !== null) {
            let objforsurgery_types_data = {
                id: ''
            }
            objforsurgery_types_data.id = subSurgeryName.id
            surgery_types_data.push(objforsurgery_types_data)
        }

        let surgery_types_list_data = []
        let objforsurgery_types_list_data = {
            id: ''
        }
        objforsurgery_types_list_data.id = surgeryType.id
        surgery_types_list_data.push(objforsurgery_types_list_data)
        let anesthesia_types_data = []
        anesthasiaSubType.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            anesthesia_types_data.push(obj)
        })

        let anesthesia_types_list_data = []
        anesthesia_type.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            anesthesia_types_list_data.push(obj)
        })
        let medications_data = []
        medicationAnswer.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            medications_data.push(obj)
        })
        let allergies_data = []
        patientAllergies.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            allergies_data.push(obj)
        })
        let medical_histories_data = []
        //console.log(choiceAnswer);
        choiceAnswer.map((data) => {
            console.log(data)
            let obj = {
                id: ''
            }

            obj.id = data.id
            medical_histories_data.push(obj)
        })
        // console.log(anesthasiaHistoryAnswers)
        let anesthesia_histories_data = []
        anesthasiaHistoryAnswers.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            anesthesia_histories_data.push(obj)
        })

        let surgery_histories_data = []
        // console.log(surgerySubHistoryName);
        if (surgerySubHistoryName !== null) {
            let objforsurgery_histories_data = {
                id: ''
            }
            objforsurgery_histories_data.id = surgerySubHistoryName.id
            surgery_histories_data.push(objforsurgery_histories_data)
        }

        let surgical_histories_list_data = []
        let objforsurgical_histories_list_data = {
            id: ''
        }
        objforsurgical_histories_list_data.id = surgeryHistory.id
        surgical_histories_list_data.push(objforsurgical_histories_list_data)

        let custom_surgery_types_data = []
        let objforcustom_surgery_types_data = {
            name: ''
        }
        otherSurgeryTypeArray.map((data) => {
            objforcustom_surgery_types_data.name = data
            custom_surgery_types_data.push(objforcustom_surgery_types_data)
        })

        let custom_medications_data = []
        let objforcustom_medications_data = {
            name: ''
        }
        otherMedicationArray.map((data) => {
            objforcustom_medications_data.name = data
            custom_medications_data.push(objforcustom_medications_data)
        })

        let custom_allergies_data = []
        otherAllegriesArray.map((data) => {
            let objforcustom_allergies_data = {
                name: ''
            }
            objforcustom_allergies_data.name = data
            custom_allergies_data.push(objforcustom_allergies_data)
        })
        console.log(agee, ageeType, fileName, genderType, patientsHeightType, patientsWeightType, patientsWeight, patientsType, lastTimeFood, indigestedMaterial, asa_ps_data, surgery_types_data, surgery_histories_data, anesthesia_types_data, medical_histories_data, medications_data, anesthesia_histories_data, allergies_data, custom_allergies_data, custom_medications_data, custom_surgery_types_data)

        var token = localStorage.getItem("token")
        fetch(API_ROOT + `save-case-summary?token=${token}`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                "age": agee,
                "name": fileName,
                "gender": genderType.value,
                "age_type": ageeType.value,
                "height": patientsHeight,
                "height_type": patientsHeightType.value,
                "weight": patientsWeight,
                "weight_type": patientsWeightType.value,
                "patient_types_id": patientsType.id,
                "npo_status_time": lastTimeFood,
                "npo_status_materials": indigestedMaterial.label,
                "asa_ps_data": asa_ps_data,
                "surgery_types_data": surgery_types_data,
                "surgical_histories_data": surgery_histories_data,
                "custom_surgery_types_data": custom_surgery_types_data,
                "anesthesia_types_data": anesthesia_types_data,
                "medications_data": medications_data,
                "custom_medications_data": custom_medications_data,
                "allergies_data": allergies_data,
                "custom_allergies_data": custom_allergies_data,
                "medical_histories_data": medical_histories_data,
                "anesthesia_histories_data": anesthesia_histories_data,

            })

        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.status === "true") {
                    setnameVisble(false)
                    setcasesummary_id(res.data.id)
                    alert("case save successfully")
                    props.history.push(`/startacase/actionsummary?caseSummaryId=${res.data.id}&caseName=${fileName}`)
                }
            })

    };

    const onSiteChanged = (e, obj) => {
        if (e.target.value === 'Yes') {
            dispatch(setMedicalHistory(obj))
        }
    };
    const onAnesthesiaHistoryChanged = (e, obj) => {
        console.log(obj.name);
        if (obj.name === "HISTORY OF COMPLICATIONS WITH ANESTHESIA") {
            if (e.target.value === 'Yes') {
                dispatch(setAnesthasiaHistory(obj))
                setshowinput(true)
            }
        }
        else {
            if (e.target.value === 'Yes') {
                dispatch(setAnesthasiaHistory(obj))
                setshowinput2(true)
            }
        }

    };

    const onMedicationValue = (e, obj) => {
        if (e.target.value === 'Yes') {
            dispatch(setMedication(obj))
        }
    };

    const closeNameModal = () => {
        setnameVisble(false);
    };


    const changeCaseName = (value) => {
        setFileName(value);
        console.log(value);
    };
    const refresh = () => {
        setrefreshPage({});
    };

    const addotherIntoMedicationCategory = (value) => {
        otherMedicationArray.push(value);
        refresh();
    };

    const addotherIntoSurgeryHistoryCategory = (value) => {
        otherSurgeryHistoryArray.push(value);
        refresh();
    };

    const addotherIntoSurgeryTypeCategory = (value) => {
        otherSurgeryTypeArray.push(value);
        refresh();
    };

    const addotherIntoAllgriesCategory = (value) => {
        otherAllegriesArray.push(value);
        refresh();
    };

    const saveIngestedMaterial = (value) => {
        setingestedMaterial(value);
    };


    const [questinNo, setquestinNo] = useState(0);

    const caseTipApi = async () => {
        var passData = []
        choiceAnswer.map((data) => {
            var obj = {
                "name": data.name
            }
            passData.push(obj)
        })
        var token = await localStorage.getItem("token")
        console.log(passData);
        const body = {
            "history": passData
        }
        const res = await axios.post(API_ROOT + `medical-history?token=${token}`, body, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        console.log(res)
        if (res.data.status === "true") {
            alert(res.data.message)
        }
    }
    return (
        <div className="main-container">
            <SaveCaseModal
                onClickSave={() => nameModalVisible()}
                modalIsOpen={modalIsOpen}
                onClose={() => closeModal()}
            />
            <SaveCaseNameModal
                onCaseNameChange={(value) => changeCaseName(value)}
                closeNameModal={() => closeNameModal()}
                postRequest={() => callToCaseSummary()}
                saveVisible={nameVisble}
                onClose={() => closeModal()}
            />
            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            {/* <CaseSummaryHeader /> */}
            <div>
                <div className="custom-heade-case-summary">
                    <h4>Case Name :{fileName === null ? '-' : fileName}</h4>
                    <div className="sub-container">
                        <h5 onClick={() => nameModalVisible()}>Save</h5>
                        <h5 onClick={() => closeModal()}>Close</h5>
                    </div>
                </div>
            </div>
            <div className='all-action-container mt-3'>
                <div className="btn-group">
                    <button className="btn sub-nav active"><Link to='/startacase/casesummary'>
                        CASE SUMMARY
                    </Link>
                    </button>
                    <button className="btn sub-nav">
                        <Link to='/startacase/actionsummary'>
                            ACTION SUMMARY
                        </Link>
                    </button>
                    {/* <button className="btn sub-nav" onClick={() => nameModalVisible()}> CASENAME: {fileName === null ? '-' : fileName}</button> */}
                </div>

                {questinNo == 0 ? (
                    <>
                        {/* <div className="col-md-1"></div> */}
                        <div className='result-container mt-3'>
                            <div onClick={() => setquestinNo(1)} className='answer-container'>
                                <div>1. AGE?</div>
                                <div>{agee}{ageeType.label}</div>
                            </div>
                            <div onClick={() => setquestinNo(2)} className='answer-container'>
                                <div>2. GENDER?</div>
                                <div>{genderType.label}</div>
                            </div>
                            <div onClick={() => setquestinNo(3)} className='answer-container'>
                                <div>3. PATIENT TYPE?</div>
                                <div>{patientsType.label}</div>
                            </div>
                            <div onClick={() => setquestinNo(4)} className='answer-container'>
                                <div>4. HEIGHT?</div>
                                <div>{patientsHeight}{patientsHeightType.value}</div>
                            </div>
                            <div onClick={() => setquestinNo(5)} className='answer-container'>
                                <div>5. WEIGHT?</div>
                                <div>{patientsWeight}{patientsWeightType.value}</div>
                            </div>
                            <div onClick={() => setquestinNo(6)} className='answer-container'>
                                <div>6. ASA-PS?</div>
                                <div>{patientsAsap.label} {patientsEmergency.value}</div>
                            </div>
                            <div onClick={() => setquestinNo(7)} className='answer-container'>
                                <div>7. SURGERY TYPE?</div>
                                <div>
                                    {/* {surgerySubType.length == 0 ? surgeryType.label : <></>}
                                {surgerySubType.label} */}

                                    {surgeryName.name === "General" ? <> {surgeryName.name} {subSurgeryName.name}</> : <>{surgeryName.name}</>}
                                    {surgeryName.name || subSurgeryName.name === null ? "" : <>{categorySurgeryName}</>}
                                </div>
                            </div>
                            <div onClick={() => setquestinNo(8)} className='answer-container'>
                                <div>8. ANESTHESIA TYPE?</div>
                                <div>
                                    {/* {anesthesiaSubType.length == 0 ? (
                                    anesthesia_type.map((data) => {
                                        return <div>{data.label}</div>;
                                    })
                                ) : (
                                    <></>
                                )}

                                {anesthesiaSubType.map((data) => {
                                    return <div>{data.label}</div>;
                                })} */}

                                    {/* {anesthasiaType.name === "Regional Anesthesia" ? <>{anesthasiaType.name} {anesthesiaSubType.name}</> : <>{anesthasiaType.name}</>} */}
                                    {anesthasiaSubType.length == 0 ? (
                                        anesthasiaType.map((data) => {
                                            return <div>{data.label}</div>;
                                        })
                                    ) : (
                                        <></>
                                    )}

                                    {anesthasiaSubType.map((data) => {
                                        return <div>{data.label}</div>;
                                    })}

                                </div>
                            </div>
                            <div onClick={() => setquestinNo(9)} className='answer-container'>
                                <div>9. NPO STATUS?</div>
                                <div>
                                    {lastTimeFood} {foodTimeType} {indigestedMaterial.label}
                                </div>
                            </div>

                            <div onClick={() => setquestinNo(10)} className='answer-container'>
                                <div>10. MEDICATIONS?</div>
                                <div>
                                    {nonListedMedication.length == 0 ? (
                                        medicationAnswer.map((data) => {
                                            return <div>{data.label}</div>;
                                        })
                                    ) : (
                                        <></>
                                    )}
                                    <div>{nonListedMedication}</div>

                                </div>
                            </div>

                            <div onClick={() => setquestinNo(11)} className='answer-container'>
                                <div>11. ALLERGIES?</div>
                                <div>
                                    {nonListedAllergies.length == 0 ? (
                                        patientAllergies.map((data) => {
                                            return <div>{data.label}</div>;
                                        })
                                    ) : (
                                        <></>
                                    )}
                                    <div>{nonListedAllergies}</div>
                                </div>
                            </div>

                            <div onClick={() => setquestinNo(12)} className='answer-container'>
                                <div>12. MEDICAL HISTORY?</div>
                                <div>
                                    {choiceAnswer.map((data) => {
                                        return <div>{data.name}</div>;
                                    })}
                                </div>
                            </div>

                            <div onClick={() => setquestinNo(13)} className='answer-container'>
                                <div>13. SURGICAL HISTORY?</div>
                                <div>
                                    {/* {surgerySubHistory.length == 0 ? surgeryHistory.label : <></>}
                                {surgerySubHistory.label} */}
                                    {surgeryHistoryName.name === "General" ? <> {surgeryHistoryName.name} {surgerySubHistoryName.name}</> : <>{surgeryHistoryName.name}</>}
                                    {surgeryHistoryName.name || surgerySubHistoryName.name === null ? "" : <>{surgeryNonListedHistoryName}</>}
                                </div>
                            </div>

                            <div onClick={() => setquestinNo(14)} className='answer-container'>
                                <div>14. ANESTHESIA HISTORY?</div>
                                <div>
                                    {anesthasiaHistoryAnswers.map((data) => {
                                        return <div>{data.name}</div>
                                    })}
                                    <>{anesthasiaInput}</>
                                    <br />
                                    <>{anesthasiaInputFam}</>
                                </div>
                            </div>

                            <div onClick={() => setquestinNo(15)} className='answer-container'>
                                <div>15. CASE TIPS?</div>
                                <div>
                                    {choiceAnswer.map((data) => {
                                        return <div>{data.name}</div>;
                                    })}
                                </div>
                            </div>


                            <div className='next-button-container'>
                                {/*<div onClick={() => openModal()} className="next-button" >
                                    SAVE
                                </div>*/}

                                {/* <div
                                    onClick={() => nameModalVisible()}
                                    className='next-button'
                                >
                                    NEXT
                                </div> */}
                            </div>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                    </>
                ) : (
                    <></>
                )}

                {questinNo == 1 ? (
                    <div className='question-container'>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>
                                QUESTION 1 OF 15- AGE?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        <div className='age-input-container'>
                            <input
                                value={agee}
                                onChange={(e) => dispatch(setAgee(e.target.value))}
                                placeholder='Answer'
                                className='ant-text-input mr-1'
                            />
                            <div className="btn-group ml-3">
                                {optionsforage.map((data) => {
                                    if (data.value === ageeType.value) {
                                        return (
                                            <button
                                                type="button"
                                                className='btn age-selected-type-button'
                                                onClick={() => dispatch(setAgeType(data))}
                                            >
                                                {data.label}
                                            </button>
                                        );
                                    } else {
                                        return (
                                            <button
                                                type="button"
                                                className='btn age-type-button'
                                                onClick={() => dispatch(setAgeType(data))}
                                            >
                                                {data.label}
                                            </button>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        {/* <div className='next-button-container'>

                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>
                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}
                {questinNo == 2 ? (
                    <div className='question-container'>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>
                                QUESTION 2 OF 15- GENDER?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        <div className='gender-input-container'>
                            <div className="btn-group">
                                {optionsforgender.map((data) => {
                                    if (data.value === genderType.value) {
                                        return (
                                            <button
                                                type="button"
                                                className='btn gender-selected-type-button'
                                                onClick={() => dispatch(setGenderType(data))}
                                            >
                                                {data.label}
                                            </button>
                                        );
                                    } else {
                                        return (
                                            <button
                                                type="button"
                                                className='btn gender-type-button'
                                                onClick={() => dispatch(setGenderType(data))}
                                            >
                                                {data.label}
                                            </button>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>

                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 3 ? (
                    <div className='question-container '>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>

                                QUESTION 3 OF 15- PATIENT TYPE?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        <div className='patientype-input-container'>
                            <div className='patient-type-button-container'>
                                <div className="btn-group">
                                    {patientTypeArray.map((data) => {
                                        if (data.id === patientsType.id) {
                                            return (
                                                <button
                                                    type="button"
                                                    className='btn patient-selected-type-button'
                                                    onClick={() => dispatch(setPatientsType(data))}
                                                >
                                                    {data.label}
                                                </button>
                                            );
                                        } else {
                                            return (
                                                <button
                                                    type="button"
                                                    className='btn patient-type-button'
                                                    onClick={() => dispatch(setPatientsType(data))}
                                                >
                                                    {data.label}
                                                </button>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                        </div>
                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>
                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 4 ? (
                    <div className='question-container'>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>

                                QUESTION 4 OF 15- HEIGHT?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        <div className='age-input-container'>
                            <input
                                value={patientsHeight}
                                onChange={(e) => dispatch(setPatientHeight(e.target.value))}
                                placeholder='Answer'
                                className='ant-text-input'
                            />
                            <div className="btn-group">
                                {optionsForHeight.map((data) => {
                                    if (data.value === patientsHeightType.value) {
                                        return (
                                            <button
                                                type="button"
                                                className='btn height-selected-type-button'
                                                onClick={() => dispatch(setPatientHeightType(data))}
                                            >
                                                {data.label}
                                            </button>
                                        );
                                    } else {
                                        return (
                                            <button
                                                type="button"
                                                className='btn height-type-button'
                                                onClick={() => dispatch(setPatientHeightType(data))}
                                            >
                                                {data.label}
                                            </button>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>
                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 5 ? (
                    <div className='question-container'>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>

                                QUESTION 5 OF 15- WEIGHT?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        <div className='age-input-container'>
                            <input
                                value={patientsWeight}
                                onChange={(e) => dispatch(setPatientWeight(e.target.value))}
                                placeholder='Answer'
                                className='ant-text-input'
                            />
                            <div className="btn-group">
                                {optionsForWeight.map((data) => {
                                    if (data.value === patientsWeightType.value) {
                                        return (
                                            <button
                                                type="button"
                                                className='btn weight-selected-type-button'
                                                onClick={() => dispatch(setPatientWeightType(data))}
                                            >
                                                {data.label}
                                            </button>
                                        );
                                    } else {
                                        return (
                                            <button
                                                type="button"
                                                className='btn weight-type-button'
                                                onClick={() => dispatch(setPatientWeightType(data))}
                                            >
                                                {data.label}
                                            </button>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>
                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>

                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 6 ? (
                    <div className='question-container'>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>

                                QUESTION 6 OF 15- ASA-PS?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        <div className='ASA-PS-input-container'>
                            <div className='asa-ps-button-container'>
                                <div className="btn-group-vertical">
                                    {AsapaArray.map((data) => {
                                        if (data.id === patientsAsap.id) {
                                            return (
                                                <button
                                                    type="button"
                                                    className='btn asaps-selected-type-button'
                                                    onClick={() => dispatch(setAsaps(data))}
                                                >
                                                    {data.label}
                                                </button>
                                            );
                                        } else {
                                            return (
                                                <button
                                                    type="button"
                                                    className='btn asa-ps-type-button'
                                                    onClick={() => dispatch(setAsaps(data))}
                                                >
                                                    {data.label}
                                                </button>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                            <div className="my-2">Emergency: </div>
                            <div className="btn-group">
                                {optionsforEmergency.map((data) => {
                                    if (data.value === patientsEmergency.value) {
                                        return (
                                            <button
                                                type="button"
                                                className='btn emergency-selected-type-button'
                                                onClick={() => dispatch(setEmergency(data))}
                                            >
                                                {data.label}
                                            </button>
                                        );
                                    } else {
                                        return (
                                            <button
                                                type="button"
                                                className='btn weight-type-button'
                                                onClick={() => dispatch(setEmergency(data))}
                                            >
                                                {data.label}
                                            </button>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>
                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 7 ? (
                    <div className='question-container'>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>

                                QUESTION 7 OF 15- SURGERY TYPE?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        <div className='Surgery-type-input-container'>
                            <Select
                                value={surgeryName}
                                onChange={(value) => handleChangeSurgeryType(value)}
                                placeholder='Surgery Type'
                                className='Surgery-type-dropdown'
                                id='patien-type'
                                options={surgeryTypeArray}
                            />
                        </div>
                        {sub_surgeryArray.length !== 0 ? (
                            <div className='Surgery-type-input-container'>
                                <Select
                                    // value={subSurgeryName}
                                    onChange={(value) => handleChangeSurgeryType2(value)}
                                    placeholder='Surgery Type'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={sub_surgeryArray}
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                        {sub_surgeryArray2.length !== 0 ? (
                            <div className='Surgery-type-input-container'>
                                <Select
                                    // value={subSurgeryName}
                                    onChange={(value) => handleChangeSurgeryType3(value)}
                                    placeholder='Surgery Type'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={sub_surgeryArray2}
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                        {sub_surgeryArray3.length !== 0 ? (
                            <div className='Surgery-type-input-container'>
                                <Select
                                    // value={subSurgeryName}
                                    onChange={(value) => handleChangeSurgeryType4(value)}
                                    placeholder='Surgery Type'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={sub_surgeryArray3}
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                        {sub_surgeryArray4.length !== 0 ? (
                            <div className='Surgery-type-input-container'>
                                <Select
                                    // value={subSurgeryName}
                                    onChange={(value) => handleChangeSurgeryType5(value)}
                                    placeholder='Surgery Type'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={sub_surgeryArray4}
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                        {sub_surgeryArray5.length !== 0 ? (
                            <div className='Surgery-type-input-container'>
                                <Select
                                    // value={subSurgeryName}
                                    onChange={(value) => alert(value)}
                                    placeholder='Surgery Type'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={sub_surgeryArray5}
                                />
                            </div>
                        ) : (
                            <></>
                        )}
                        <div className='medication-extra-type-container'>
                            <input
                                className='ant-text-input'
                                onChange={(e) =>
                                    dispatch(setCategorySurgeryName(e.target.value))
                                }
                                placeholder='Enter type not listed above'
                            />
                            <div
                                className='addType-btn'
                                onClick={() =>
                                    addotherIntoSurgeryTypeCategory(categorySurgeryName)
                                }
                            >
                                <i className="fa fa-plus-circle"></i>
                            </div>
                        </div>
                        {otherSurgeryTypeArray.map((data) => {
                            return <div>{data}</div>;
                        })}

                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>
                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 8 ? (
                    <div className='question-container'>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>

                                QUESTION 8 OF 15- ANESTHESIA TYPE?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        <div className='ANESTHESIA-type-input-container'>
                            <Select
                                isMulti={true}
                                // value={anesthasiaType}
                                onChange={(value) => handleChangeAnesethesiaType(value)}
                                placeholder='Anesthesia Type'
                                className='ANESTHESIA-type-dropdown'
                                id='patien-type'
                                options={anesthesia_type_list}
                            />
                        </div>
                        <div className='Surgery-type-input-container'>
                            {subanesthesia_type.length !== 0 ? (
                                <Select
                                    isMulti={true}
                                    onChange={(value) => handleChangeAnesethesiaType2(value)}
                                    placeholder='Anestheisa Sub Type'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={subanesthesia_type}
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className='Surgery-type-input-container'>
                            {subanesthesia_type2.length !== 0 ? (
                                <Select
                                    isMulti={true}
                                    onChange={(value) => handleChangeAnesethesiaType3(value)}
                                    placeholder='Anesthesia Sub Type'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={subanesthesia_type2}
                                />
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className='Surgery-type-input-container'>
                            {subanesthesia_type3.length !== 0 ? (
                                <Select
                                    isMulti={true}
                                    onChange={(value) => handleChangeAnesethesiaType4(value)}
                                    placeholder='Anesthesia Sub Type'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={subanesthesia_type3}
                                />
                            ) : (
                                <></>
                            )}
                        </div>

                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>
                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}



                {questinNo == 9 ? (
                    <div className='npo-question-container'>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>

                                QUESTION 9 OF 15- NPO-STATUS?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        <div className='age-input-container'>
                            <input
                                type='number'
                                value={timeOfLastFoodOrDrink}
                                onChange={(e) => dispatch(setLastTimeFood(e.target.value))}
                                placeholder='Time Of Last Food or Drink'
                                className='ant-text-input'
                            />
                            <div className="btn-group">
                                {optionForNPOStatus.map((data) => {
                                    if (data.value === foodTimeType) {
                                        return (
                                            <button
                                                type="button"
                                                className='btn npo-time-type-selected-type-button'
                                                onClick={() => handleChangeNPOStatus(data.value)}
                                            >
                                                {data.label}
                                            </button>
                                        );
                                    } else {
                                        return (
                                            <button
                                                type="button"
                                                className='btn weight-type-button'
                                                onClick={() => dispatch(setTimeType(data.value))}
                                            >
                                                {data.label}
                                            </button>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        <div>Select type of last food or liquids</div>
                        <div className='ingested-input-container'>
                            <div className="btn-group">
                                {ingestedMaterialArray.map((data) => {
                                    console.log(data)
                                    if (data.ingested_material === indigestedMaterial) {
                                        return (
                                            <button
                                                type="button"
                                                className='btn ingested-selected-type-button'
                                                onClick={() => dispatch(setIndigestedMaterial(data.ingested_material))}
                                            >
                                                {data.ingested_material}
                                            </button>
                                        );
                                    } else {
                                        return (
                                            <button
                                                className='btn ingested-type-button'
                                                onClick={() => dispatch(setIndigestedMaterial(data.ingested_material))}
                                            >
                                                {data.ingested_material}
                                            </button>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                        <h4 style={{ marginTop: 10 }}>Reference Table</h4>
                        <div className="doseTable">
                            <div className="row">
                                <div className="col-md-5"><strong>Age</strong></div>
                                <div className="col-md-6"><strong>General or MAC Anesthesia</strong></div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">New Born - 6 Months</div>
                                <div className="col-md-6">Clear Fluid: 2 Hrs <br></br>Breast Milk: 4 Hrs<br></br>Infant Formula: 5 Hrs</div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">6 Months - 36 Months</div>
                                <div className="col-md-6">Clear Fluid: 2 Hrs <br></br>Breast Milk: 4 Hrs<br></br>Infant Formula: 6 Hrs<br></br>Non Human Milk: 6 Hrs<br></br>Solid: 6 Hrs</div>
                            </div>
                            <div className="row">
                                <div className="col-md-5">Older Than 36 Months</div>
                                <div className="col-md-6">Clear Fluid: 2 Hrs <br></br>Non Human Milk: 6 Hrs <br></br>Light Meal: 6 Hrs<br></br>Heavy Meal: 8 Hrs</div>
                            </div>
                        </div>
                        <div>
                            <h4>Please Note:</h4>
                            <br></br>
                            <p>
                                1) Clear Fluid: water, black coffee, clear tea, carbonated beverages,fruit juices without pulp.
                                <br></br>
                                Light Meal: coffee with milk, organic juice, other fruit juice with pulp,cereal, toast, crackers, etc.
                                <br></br>
                                Heavy Meal: fatty or fried food, cheese meat, etc.
                            </p>
                            <p>
                                2) Certain medical conditions slow down gastric emptying and/or put patients at higher risk of pulmonary aspiration, such as diabetes, renal disease, gastrointestinal motility disorders, GERD, dysphagia, hiatal hernia, potential difficult airway management, etc. The anesthesia provider should use his/her clinical judgment to decide the appropriate NPO time accordingly.
                            </p>
                            <br></br>
                            <p>3) For emergency surgeries, the anesthesia provider should discuss with surgeon the urgency of the surgery, weigh risks and benefits, and decide with the surgeon the appropriate NPO time accordingly.</p>
                        </div>

                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>
                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>

                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 10 ? (
                    <div className='question-container'>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>

                                QUESTION 10 OF 15- MEDICATIONS?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        <div className='medications-input-container'>
                            {medicationsArray.map((data1) => {
                                console.log(data1)
                                return (
                                    <>
                                        <div className='sub-question-container'>
                                            <div>{data1.name}</div>
                                            {medication.map((selecteddata, i) => {
                                                if (selecteddata.name === data1.name) {
                                                    return (
                                                        <div>
                                                            <div className='option-box-container'>
                                                                <input
                                                                    defaultChecked={
                                                                        data1.name === "No medication" ? true
                                                                            :
                                                                            selecteddata.name === data1.name
                                                                                ? true
                                                                                : false
                                                                    }
                                                                    onChange={(e) => onSiteChanged(e, data1)}
                                                                    type='radio'
                                                                    value='Yes'
                                                                    name={data1.name}
                                                                />{' '}
                                                                Yes
                                                                <input
                                                                    onChange={(e) => onSiteChanged(e, data1)}
                                                                    type='radio'
                                                                    value='No'
                                                                    name={data1.name}
                                                                />{' '}
                                                                No
                                                            </div>
                                                        </div>
                                                    );
                                                } else {
                                                    return (
                                                        <div>
                                                            <div className='option-box-container'>
                                                                <input
                                                                    defaultChecked={
                                                                        data1.name === "No medication" ? true
                                                                            :
                                                                            selecteddata.name === data1.name
                                                                                ? true
                                                                                : false
                                                                    }
                                                                    checked={
                                                                        selecteddata.name === data1.name
                                                                            ? true
                                                                            : false
                                                                    }
                                                                    onChange={(e) => onSiteChanged(e, data1)}
                                                                    type='radio'
                                                                    value='Yes'
                                                                    name={data1.name}
                                                                />{' '}
                                                                Yes
                                                                <input
                                                                    onChange={(e) => onSiteChanged(e, data1)}
                                                                    type='radio'
                                                                    value='No'
                                                                    name={data1.name}
                                                                />{' '}
                                                                No
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            })}
                                            {medication.length === 0 ? (
                                                <div className='option-box-container'>
                                                    <input
                                                        onChange={(e) => onMedicationValue(e, data1)}
                                                        type='radio'
                                                        value='Yes'
                                                        name={data1.name}
                                                    />{' '}
                                                    Yes
                                                    <input
                                                        onChange={(e) => onMedicationValue(e, data1)}
                                                        type='radio'
                                                        value='No'
                                                        name={data1.name}
                                                    />{' '}
                                                    No
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                        </div>
                                        <div className="all-action-subcontainer-content-1"></div></>
                                );
                            })}

                            <div className='medication-extra-type-container'>
                                <input
                                    className='ant-text-input'
                                    onChange={(e) => dispatch(setNonListedMedication(e.target.value))}
                                    placeholder='Enter type not listed above'
                                />
                                <div
                                    className='addType-btn'
                                    onClick={() => addotherIntoMedicationCategory(nonListedMedication)}
                                >
                                    <i className="fa fa-plus-circle"></i>
                                </div>
                            </div>
                            {otherMedicationArray.map((data) => {
                                return <div>{data}</div>;
                            })}
                        </div>

                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>
                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 11 ? (
                    <div className='question-container'>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>

                                QUESTION 11 OF 15- ALLERGIES?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        <div className='ANESTHESIA-type-input-container'>
                            <Select
                                defaultValue={{ label: "No Known Drug Alle…llergies", value: "No Known Drug Alle…llergies" }}
                                isMulti={true}
                                onChange={(value) => dispatch(setAllergies(value))}
                                className='ANESTHESIA-type-dropdown'
                                id='patien-type'
                                options={AllegriesArray}
                            />
                            {
                                patientAllergies.map((data) => {
                                    console.log(data);
                                    if (data.name === "OTHER/NOT LISTED") {
                                        return (
                                            <div className='ANESTHESIA-type-input-container'>
                                                <div className='medication-extra-type-container'>
                                                    <input
                                                        className='ant-text-input'
                                                        onChange={(e) => dispatch(setNotListedAllergies(e.target.value))}
                                                        placeholder='Enter type not listed above'
                                                    />
                                                    <div
                                                        className='addType-btn'
                                                        onClick={() => addotherIntoAllgriesCategory(nonListedAllergies)}
                                                    >
                                                        <i className="fa fa-plus-circle"></i>
                                                    </div>
                                                </div>
                                                {otherAllegriesArray.map((data) => {
                                                    return <div>{data}</div>;
                                                })}
                                            </div>
                                        )

                                    }
                                })
                            }

                        </div>

                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>
                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 12 ? (
                    <div className='medical-history-question-container'>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>

                                QUESTION 12 OF 15- MEDICAL HISTORY?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        {subQuestionClick ? (
                            <div className='medical-history-main-container'>
                                {medicalHistory.map((data, i) => {
                                    return (
                                        <>
                                            <div style={{ width: '100%' }}>
                                                <div className='medical-history-question-header'>
                                                    <div className="pl-3">
                                                        {i + 1}. {data.name}
                                                    </div>
                                                </div>

                                                <div className='medical-history-sub-question-sub-container'>
                                                    {data.medical_history_sub_type.map((data1) => {
                                                        return (
                                                            <div className='sub-question-container'>
                                                                <div>{data1.name}</div>
                                                                {medicalHistoryArray.map((selecteddata) => {
                                                                    if (selecteddata.name === data1.name) {
                                                                        return (
                                                                            <div>
                                                                                <div className='option-box-container'>
                                                                                    <input
                                                                                        checked={
                                                                                            selecteddata.name === data1.name
                                                                                                ? true
                                                                                                : false
                                                                                        }
                                                                                        onChange={(e) =>
                                                                                            onSiteChanged(e, data1)
                                                                                        }
                                                                                        type='radio'
                                                                                        value='Yes'
                                                                                        name={data1.name}
                                                                                    />{' '}
                                                                                    Yes
                                                                                    <input
                                                                                        onChange={(e) =>
                                                                                            onSiteChanged(e, data1)
                                                                                        }
                                                                                        type='radio'
                                                                                        value='No'
                                                                                        name={data1.name}
                                                                                    />{' '}
                                                                                    No
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    } else {
                                                                        return (
                                                                            <div>
                                                                                <div className='option-box-container'>
                                                                                    <input
                                                                                        checked={
                                                                                            selecteddata.name === data1.name
                                                                                                ? true
                                                                                                : false
                                                                                        }
                                                                                        onChange={(e) =>
                                                                                            onSiteChanged(e, data1)
                                                                                        }
                                                                                        type='radio'
                                                                                        value='Yes'
                                                                                        name={data1.name}
                                                                                    />{' '}
                                                                                    Yes
                                                                                    <input
                                                                                        onChange={(e) =>
                                                                                            onSiteChanged(e, data1)
                                                                                        }
                                                                                        type='radio'
                                                                                        value='No'
                                                                                        name={data1.name}
                                                                                    />{' '}
                                                                                    No
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    }
                                                                })}{' '}
                                                                {medicalHistoryArray.length === 0 ? (
                                                                    <div className='option-box-container'>
                                                                        <input
                                                                            onChange={(e) =>
                                                                                onSiteChanged(e, data1)
                                                                            }
                                                                            type='radio'
                                                                            value='Yes'
                                                                            name={data1.name}
                                                                        />{' '}
                                                                        Yes
                                                                        <input
                                                                            onChange={(e) =>
                                                                                onSiteChanged(e, data1)
                                                                            }
                                                                            type='radio'
                                                                            value='No'
                                                                            name={data1.name}
                                                                        />{' '}
                                                                        No
                                                                    </div>
                                                                ) : (
                                                                    <></>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </>
                                    );
                                })}
                                <div style={{ height: 100 }}></div>
                            </div>
                        ) : (
                            <></>
                        )}

                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 13 ? (
                    <div className='question-container'>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>

                                QUESTION 13 OF 15- SURGICAL HISTORY?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        <div className='Surgery-type-input-container'>
                            <Select
                                // value={surgeryHistoryName}
                                onChange={(value) => handleChangeSurgeryHistory(value)}
                                placeholder='Surgery History'
                                className='Surgery-type-dropdown'
                                id='patien-type'
                                options={surgeryHistoryArray}
                            />
                        </div>
                        {sub_surgeryHistoryArray.length !== 0 ? (
                            <div className='Surgery-type-input-container'>

                                <Select
                                    // value={surgerySubHistoryName}
                                    onChange={(value) => handleChangeSurgeryHistory2(value)}
                                    placeholder='Surgery History Sub Type'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={sub_surgeryHistoryArray}
                                />
                            </div>

                        ) : (
                            <></>
                        )}
                        {sub_surgeryHistoryArray2.length !== 0 ? (
                            <div className='Surgery-type-input-container'>

                                <Select
                                    // value={surgerySubHistoryName}
                                    onChange={(value) => handleChangeSurgeryHistory3(value)}
                                    placeholder='Surgery History Sub Type'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={sub_surgeryHistoryArray2}
                                />
                            </div>

                        ) : (
                            <></>
                        )}
                        {sub_surgeryHistoryArray3.length !== 0 ? (
                            <div className='Surgery-type-input-container'>

                                <Select
                                    // value={surgerySubHistoryName}
                                    onChange={(value) => handleChangeSurgeryHistory4(value)}
                                    placeholder='Surgery History Sub Type'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={sub_surgeryHistoryArray3}
                                />
                            </div>

                        ) : (
                            <></>
                        )}
                        {sub_surgeryHistoryArray4.length !== 0 ? (
                            <div className='Surgery-type-input-container'>

                                <Select
                                    // value={surgerySubHistoryName}
                                    onChange={(value) => handleChangeSurgeryHistory5(value)}
                                    placeholder='Surgery History Sub Type'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={sub_surgeryHistoryArray4}
                                />
                            </div>

                        ) : (
                            <></>
                        )}
                        <div className='medication-extra-type-container'>
                            <input
                                className='ant-text-input'
                                onChange={(e) => dispatch(setNonListedSurgeryHistoryName(e.target.value))}
                                placeholder='Enter type not listed above'
                            />
                            <div
                                className='addType-btn'
                                onClick={() =>
                                    addotherIntoSurgeryHistoryCategory(surgeryNonListedHistoryName)
                                }
                            >
                                <i className="fa fa-plus-circle"></i>
                            </div>
                        </div>
                        {otherSurgeryHistoryArray.map((data) => {
                            return <div>{data}</div>;
                        })}

                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>
                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 14 ? (
                    <div className='question-container'>
                        <div className='age-header-container'>
                            <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                            <div>

                                QUESTION 14 OF 15- ANESTHESIA HISTORY?
                            </div>
                            <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                        </div>
                        <div className='ANESTHESIA-type-input-container'>
                            {anesethesiaHistory.map((data1) => {
                                return (
                                    <div className='sub-question-container'>
                                        <div>{data1.label}</div>
                                        {anesethesiaSubHistory.map((selecteddata) => {
                                            if (selecteddata.name === data1.name) {
                                                return (
                                                    <div>
                                                        <div className='option-box-container'>
                                                            <input
                                                                checked={
                                                                    selecteddata.name === data1.name
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                                type='radio'
                                                                value='Yes'
                                                                name={data1.name}
                                                            />{' '}
                                                            Yes
                                                            <input
                                                                onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                                type='radio'
                                                                value='No'
                                                                name={data1.name}
                                                            />{' '}
                                                            No
                                                        </div>
                                                    </div>
                                                );
                                            } else {
                                                return (
                                                    <div>
                                                        <div className='option-box-container'>
                                                            <input
                                                                checked={
                                                                    selecteddata.name === data1.name
                                                                        ? true
                                                                        : false
                                                                }
                                                                onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                                type='radio'
                                                                value='Yes'
                                                                name={data1.name}
                                                            />{' '}
                                                            Yes
                                                            <input
                                                                onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                                type='radio'
                                                                value='No'
                                                                name={data1.name}
                                                            />{' '}
                                                            No
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        })}

                                        {anesethesiaSubHistory.length === 0 ? (
                                            <div className='option-box-container'>
                                                <input
                                                    onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                    type='radio'
                                                    value='Yes'
                                                    className="mr-1"
                                                    name={data1.name}
                                                />{' '}
                                                Yes
                                                <input
                                                    onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                    type='radio'
                                                    value='No'
                                                    className="mr-1 ml-1"
                                                    name={data1.name}
                                                />{' '}
                                                No
                                            </div>
                                        ) : (
                                            <></>
                                        )}
                                        {data1.label ===
                                            'HISTORY OF COMPLICATIONS WITH ANESTHESIA' && showinput
                                            ? (
                                                <div className="p-2 ant-container">
                                                    <input className="ant-text-input" placeholder='Enter something...' onChange={(e) => dispatch(setAnesthasiaInput(e.target.value))} />
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                        {data1.label ===
                                            'FAMILY HISTORY OF COMPLICATIONS WITH ANESTHESIA' && showinput2
                                            ? (
                                                <div className="p-2 ant-container">
                                                    <input className="ant-text-input" placeholder='Enter something...' onChange={(e) => dispatch(setAnesthasiaInputFam(e.target.value))} />
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                    </div>
                                );
                            })}
                        </div>


                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                Back to question list
                            </div>
                        </div> */}
                        <div className='next-button-container-1'>
                            <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                Back
                            </div>
                        </div>
                        <div
                            onClick={() => nameModalVisible()}
                /*onClick={() => }*/ className='next-button'
                        >
                            Save
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {
                    questinNo === 15 ?
                        <div className="question-container" >
                            <div className='age-header-container'>
                                <i onClick={() => prevBtnClick()} className="material-icons icon-left">arrow_left</i>
                                <div>

                                    QUESTION 15 OF 15- CASE TIPS?
                                </div>
                                <i onClick={() => nextBtnClick()} className="material-icons icon-right">arrow_right</i>

                            </div>

                            <div className="all-action-subcontainer" >
                                {
                                    choiceAnswer.map((data, i) => {
                                        return (
                                            <>
                                                <h5>{i + 1}. {data.name}</h5>
                                            </>
                                        )
                                    })
                                }

                                <div>

                                </div>

                                <div className='next-button-container-1'>
                                    <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                                        Back
                                    </div>
                                </div>
                                <div
                                    onClick={() => caseTipApi()}
                /*onClick={() => }*/ className='next-button'
                                >
                                    Save
                                </div>
                            </div>
                        </div>
                        : <></>
                }



                {questinNo == 16 ? (
                    <div className='result-container'>
                        <div onClick={() => setquestinNo(1)} className='answer-container'>
                            <div>1. AGE?</div>
                            <div>{agee}{ageeType.value}</div>
                        </div>
                        <div onClick={() => setquestinNo(2)} className='answer-container'>
                            <div>2. GENDER?</div>
                            <div>{genderType.label}</div>
                        </div>
                        <div onClick={() => setquestinNo(3)} className='answer-container'>
                            <div>3. PATIENT TYPE?</div>
                            <div>{patientsType.label}</div>
                        </div>
                        <div onClick={() => setquestinNo(4)} className='answer-container'>
                            <div>4. HEIGHT?</div>
                            <div>{patientsHeight}{patientsHeightType.value}</div>
                        </div>
                        <div onClick={() => setquestinNo(5)} className='answer-container'>
                            <div>5. WEIGHT?</div>
                            <div>{patientsWeight}{patientsWeightType.value}</div>
                        </div>
                        <div onClick={() => setquestinNo(6)} className='answer-container'>
                            <div>6. ASA-PS?</div>
                            <div>{patientsAsap.label} {patientsEmergency.value}</div>
                        </div>
                        <div onClick={() => setquestinNo(7)} className='answer-container'>
                            <div>7. SURGERY TYPE?</div>
                            <div>
                                {/* {surgerySubType.length == 0 ? surgeryType.label : <></>}
                                {surgerySubType.label} */}

                                {surgeryName.name === "General" ? <> {surgeryName.name} {subSurgeryName.name}</> : <>{surgeryName.name}</>}
                                {surgeryName.name || subSurgeryName.name === null ? "" : <>{categorySurgeryName}</>}
                            </div>
                        </div>
                        <div onClick={() => setquestinNo(8)} className='answer-container'>
                            <div>8. ANESTHESIA TYPE?</div>
                            <div>
                                {/* {anesthesiaSubType.length == 0 ? (
                                    anesthesia_type.map((data) => {
                                        return <div>{data.label}</div>;
                                    })
                                ) : (
                                    <></>
                                )}

                                {anesthesiaSubType.map((data) => {
                                    return <div>{data.label}</div>;
                                })} */}

                                {/* {anesthasiaType.name === "Regional Anesthesia" ? <>{anesthasiaType.name} {anesthesiaSubType.name}</> : <>{anesthasiaType.name}</>} */}
                                {anesthasiaSubType.length == 0 ? (
                                    anesthasiaType.map((data) => {
                                        return <div>{data.label}</div>;
                                    })
                                ) : (
                                    <></>
                                )}

                                {anesthasiaSubType.map((data) => {
                                    return <div>{data.label}</div>;
                                })}

                            </div>
                        </div>
                        <div onClick={() => setquestinNo(14)} className='answer-container'>
                            <div>9. NPO STATUS?</div>
                            <div>
                                {lastTimeFood} {foodTimeType} {indigestedMaterial.label}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(10)} className='answer-container'>
                            <div>10. MEDICATIONS?</div>
                            <div>
                                {nonListedMedication.length == 0 ? (
                                    medicationAnswer.map((data) => {
                                        return <div>{data.label}</div>;
                                    })
                                ) : (
                                    <></>
                                )}
                                <div>{nonListedMedication}</div>

                            </div>
                        </div>

                        <div onClick={() => setquestinNo(13)} className='answer-container'>
                            <div>11. ALLERGIES?</div>
                            <div>
                                {nonListedAllergies.length == 0 ? (
                                    patientAllergies.map((data) => {
                                        return <div>{data.label}</div>;
                                    })
                                ) : (
                                    <></>
                                )}
                                <div>{nonListedAllergies}</div>
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(9)} className='answer-container'>
                            <div>12. MEDICAL HISTORY?</div>
                            <div>
                                {choiceAnswer.map((data) => {
                                    return <div>{data.name}</div>;
                                })}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(11)} className='answer-container'>
                            <div>13. SURGICAL HISTORY?</div>
                            <div>
                                {/* {surgerySubHistory.length == 0 ? surgeryHistory.label : <></>}
                                {surgerySubHistory.label} */}
                                {surgeryHistoryName.name === "General" ? <> {surgeryHistoryName.name} {surgerySubHistoryName.name}</> : <>{surgeryHistoryName.name}</>}
                                {surgeryHistoryName.name || surgerySubHistoryName.name === null ? "" : <>{surgeryNonListedHistoryName}</>}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(12)} className='answer-container'>
                            <div>14. ANESTHESIA HISTORY?</div>
                            <div>
                                {anesthasiaHistoryAnswers.map((data) => {
                                    return <div>{data.name}</div>
                                })}
                                <>{anesthasiaInput}</>
                                <br />
                                <>{anesthasiaInputFam}</>
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(15)} className='answer-container'>
                            <div>15. CASE TIPS?</div>
                            <div>
                                {choiceAnswer.map((data) => {
                                    return <div>{data.name}</div>;
                                })}
                            </div>
                        </div>


                        <div className='next-button-container'>
                            {/*<div onClick={() => openModal()} className="next-button" >
                                    SAVE
                                </div>*/}

                            <div
                                onClick={() => nameModalVisible()}
                /*onClick={() => }*/ className='next-button'
                            >
                                SAVE
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {/* <div className='next-button-container-1'>
                    <div style={{ float: "left" }} onClick={() => backBtnClick()} className="next-button-1">
                        Back
                    </div>
                </div> */}

                <div onClick={() => {
                    props.history.push({
                        pathname: "/crises"
                    })
                }} className="crises-button" >
                    CRISES
                </div>
            </div>
        </div >
    );
};

export default CaseSummaryRedux;
