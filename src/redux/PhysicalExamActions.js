import {
    SET_CERVICAL_SPINE_MOBILITY_OTHER_TEXT, SET_BLOOD_PRESSURE_SYSTOLIC_BP, SET_BLOOD_PRESSURE_DIASTOLIC_BP, SET_WEIGHT, SET_HEIGHT, SET_MOOD, SET_MOOD_OTHER_TEXT,
    SET_BMI, SET_JAUNDICE, SET_GENERAL_APPERANCE_OTHER_LIST, SET_MALLAMPATI_SCORE, SET_MOUTH_OPENING, SET_MOUTH_OPENING_OTHER_TEXT,
    SET_BEARDED, SET_CERVICAL_SPINE_MOBILITY, SET_NECK_CIRCUMFERENCE_LESS_THAN_42CM,
    TEMPOROMANDIBULAR_JOINT_MOBILITY, SET_MOTOR_AND_SENSORY_FUNCTION_OTHER_TEXT, TEMPOROMANDIBULAR_JOINT_MOBILITY_OTHER_TEXT, SET_TEETH, SET_THROMENTAL_DISTANCE, SET_AIRWAY_OTHER_LISTED,
    SET_AUSCULTATION, SET_COUGHING, SET_THORACIC_EXPANSION, SET_OXYGEN_SATURATION_ON_ROOM_AIR, SET_PULMONARY_OTHER_LISTED,
    SET_PULSE_RATE, SET_ARTERIAL_LOCATION_OTHER_LIST, SET_COGNITIVE_FUNCTION_OTHER_TEXT, SET_AUSCULTATION_FOR_MURMURS, SET_CENTRAL_IV_CATHERTER_TYPE_OTHER_TEXT, SET_EDEMA_LOWER_EXTREMITY, SET_JUGULAR_VENOUS_DISTENSION, SET_BP, SET_CARDIOVASCULAR_OTHER_LISTED, SET_MOTOR_AND_SENSORY_FUNCTION, SET_NEUROLOGIC_OTHER_LISTED, SET_PETECHIAE, SET_BRUISING, SET_CLINICAL_EVIDENCE_OF_ANEMIA, SET_HEMATOLOGIC_OTHER_LISTED, SET_PERIPHERAL_IV, SET_GAUGE, SET_LOCATION, SET_CENTRAL_IV_ULTRASOUND_FOR_LINE_PLACEMENT, SET_CENTRAL_IV_CATHERTER_TYPE, SET_CENTRAL_IV_PULMONARY_ARTERIAL_CATHETER, SET_ARTERIAL_ULTRASOUND_FOR_LINE_PLACEMENT, SET_ARTERIAL_GUAGE, SET_ARTERIAL_LOCATION, SET_PHYSICAL_EXAM_OTHER_LISTED, SET_COGNITIVE_FUNCTION,
    SET_AUSCULTATION_MAIN_TYPE, SET_AUSCULTATION_SUB_TYPE, SET_AUSCULTATION_SUB_SUB_TYPE, SET_MURMUR_PRESENT, SET_MURMUR_TYPE_LOCATION
} from './PhysicalExamTypes'
const Mood = []
const GenralOtherList = []
const MouthOpening = []
const cervicalSpineMobilityTemp = []
const TemporomandibularJointMobilityTemp = []
const teethTemp = []
const thyromental_distance = []
const AirwatOtherList = []
const Auscultation = []
const PulmonaryOtherList = []
const MotorAndSensoryFunctionTemp = []
const ConnitiveTemp = []
const HematologicOtherListTemp = []
const LocationTemp = []
const Catheter_type_Temp = []
const ArterialLoctionTemp = []
const PhysicalOtherListTemp = []
const thoracic_expansion = []
// const auscMainTtype = []

export const setBloodPressureSystolicBP = systolicBP => {
    return {
        type: SET_BLOOD_PRESSURE_SYSTOLIC_BP,
        payload: systolicBP
    }
}

export const setBloodPressureDiastolicBP = diastolicBP => {
    return {
        type: SET_BLOOD_PRESSURE_DIASTOLIC_BP,
        payload: diastolicBP
    }
}

export const setWeight = weight => {
    return {
        type: SET_WEIGHT,
        payload: weight
    }
}

export const setHeight = height => {
    return {
        type: SET_HEIGHT,
        payload: height
    }
}

export const setBMI = BMI => {
    return {
        type: SET_BMI,
        payload: BMI
    }
}
export const setMood = mood => {
    return {
        type: SET_MOOD,
        payload: mood
    }
}
export const setMoodOtherText = MoodOtherText => {
    console.log(MoodOtherText)
    return {
        type: SET_MOOD_OTHER_TEXT,
        payload: MoodOtherText
    }
}


export const setJaundice = jaundice => {
    return {
        type: SET_JAUNDICE,
        payload: jaundice
    }
}

export const setGeneralApperanceOtherList = GeneralApperanceOtherList => {
    console.log(GeneralApperanceOtherList);
    return {
        type: SET_GENERAL_APPERANCE_OTHER_LIST,
        payload: GeneralApperanceOtherList
    }
}


export const setMallampatiScore = mallampatiScore => {

    return {
        type: SET_MALLAMPATI_SCORE,
        payload: mallampatiScore
    }
}

export const setMouthOpening = mouthOpening => {
    return {
        type: SET_MOUTH_OPENING,
        payload: mouthOpening
    }
}

export const setMouthOpeningOtherText = MouthOpeningOtherText => {
    //console.log(MoodOtherText)
    return {
        type: SET_MOUTH_OPENING_OTHER_TEXT,
        payload: MouthOpeningOtherText
    }
}

export const setBearded = bearded => {
    return {
        type: SET_BEARDED,
        payload: bearded
    }
}

export const setCervicalSpineMobility = cervicalSpineMobility => {
    return {
        type: SET_CERVICAL_SPINE_MOBILITY,
        payload: cervicalSpineMobility
    }
}
//SET_CERVICAL_SPINE_MOBILITY_OTHER_TEXT
export const setCervicalSpineMobilityOtherText = cervicalSpineMobilityOtherText => {
    return {
        type: SET_CERVICAL_SPINE_MOBILITY_OTHER_TEXT,
        payload: cervicalSpineMobilityOtherText
    }
}


export const setNeckCircumferenceLessThan42 = NeckCircumferenceLessThan42 => {

    return {
        type: SET_NECK_CIRCUMFERENCE_LESS_THAN_42CM,
        payload: NeckCircumferenceLessThan42
    }
}

//TEMPOROMANDIBULAR_JOINT_MOBILITY
export const setTemporomandibularJointMobility = TemporomandibularJointMobility => {
    return {
        type: TEMPOROMANDIBULAR_JOINT_MOBILITY,
        payload: TemporomandibularJointMobility
    }
}

//TEMPOROMANDIBULAR_JOINT_MOBILITY_OTHER_TEXT
export const setTemporomandibularJointMobilityOtherText = TemporomandibularJointMobilityOtherText => {
    return {
        type: TEMPOROMANDIBULAR_JOINT_MOBILITY_OTHER_TEXT,
        payload: TemporomandibularJointMobilityOtherText
    }
}


export const setTeeth = teeth => {
    return {
        type: SET_TEETH,
        payload: teeth
    }
}

export const setThromentalDistance = thromentalDistance => {
    thyromental_distance.push(thromentalDistance)
    return {
        type: SET_THROMENTAL_DISTANCE,
        payload: thyromental_distance
    }
}

//SET_AIRWAY_OTHER_LISTED
export const setAirwayOtherList = airwayotherlist => {
    return {
        type: SET_AIRWAY_OTHER_LISTED,
        payload: airwayotherlist
    }
}


export const setAuscultation = auscultation => {
    Auscultation.push(auscultation)
    return {
        type: SET_AUSCULTATION,
        payload: Auscultation
    }
}

export const setCoughing = coughing => {

    return {
        type: SET_COUGHING,
        payload: coughing
    }
}

export const setThoracicExpansion = thoracicExpansion => {

    return {
        type: SET_THORACIC_EXPANSION,
        payload: thoracicExpansion
    }
}

export const setOxygenSaturationOnRoomAir = OxygenSaturationOnRoomAir => {
    return {
        type: SET_OXYGEN_SATURATION_ON_ROOM_AIR,
        payload: OxygenSaturationOnRoomAir
    }
}

export const setPumanoryOtherListed = pumanoryOtherListed => {
    return {
        type: SET_PULMONARY_OTHER_LISTED,
        payload: pumanoryOtherListed
    }
}

export const setPulseRate = pulseRate => {
    return {
        type: SET_PULSE_RATE,
        payload: pulseRate
    }
}

export const setAuscultationForMurmurs = auscultationForMurmurs => {
    return {
        type: SET_AUSCULTATION_FOR_MURMURS,
        payload: auscultationForMurmurs
    }
}

export const setEdemaLowerExtremity = EdemaLowerExtremity => {
    return {
        type: SET_EDEMA_LOWER_EXTREMITY,
        payload: EdemaLowerExtremity
    }
}

export const setJugularVenousDistension = JugularVenousDistension => {
    return {
        type: SET_JUGULAR_VENOUS_DISTENSION,
        payload: JugularVenousDistension
    }
}

export const setBP = BP => {
    return {
        type: SET_BP,
        payload: BP
    }
}

export const setCardiovascularOtherListed = CardiovascularOtherListed => {
    return {
        type: SET_CARDIOVASCULAR_OTHER_LISTED,
        payload: CardiovascularOtherListed
    }
}

export const setMotorAndSensoryFunction = MotorAndSensoryFunction => {
    return {
        type: SET_MOTOR_AND_SENSORY_FUNCTION,
        payload: MotorAndSensoryFunction
    }
}

//SET_MOTOR_AND_SENSORY_FUNCTION_OTHER_TEXT
export const setMotorAndSensoryFunctionOtherText = MotorAndSensoryFunctionOtherText => {
    return {
        type: SET_MOTOR_AND_SENSORY_FUNCTION_OTHER_TEXT,
        payload: MotorAndSensoryFunctionOtherText
    }
}



export const setCognitiveFunction = CognitiveFunction => {
    return {
        type: SET_COGNITIVE_FUNCTION,
        payload: CognitiveFunction
    }
}

//SET_COGNITIVE_FUNCTION_OTHER_TEXT
export const setCognitiveFunctionOtherText = CognitiveFunctionOtherText => {
    return {
        type: SET_COGNITIVE_FUNCTION_OTHER_TEXT,
        payload: CognitiveFunctionOtherText
    }
}

//SET_NEUROLOGIC_OTHER_LISTED
export const setNeurologicOther = NeurologicOther => {
    return {
        type: SET_NEUROLOGIC_OTHER_LISTED,
        payload: NeurologicOther
    }
}

export const setPetechiae = Petechiae => {
    return {
        type: SET_PETECHIAE,
        payload: Petechiae
    }
}

export const setBruising = Bruising => {
    return {
        type: SET_BRUISING,
        payload: Bruising
    }
}

export const setClinicalEvidenceOfAnemia = ClinicalEvidenceOfAnemia => {
    return {
        type: SET_CLINICAL_EVIDENCE_OF_ANEMIA,
        payload: ClinicalEvidenceOfAnemia
    }
}

export const setHematologicOtherListed = HematologicOtherListed => {
    return {
        type: SET_HEMATOLOGIC_OTHER_LISTED,
        payload: HematologicOtherListed
    }
}

export const setPeripheralIV = PeripheralIV => {
    return {
        type: SET_PERIPHERAL_IV,
        payload: PeripheralIV
    }
}

export const setGauge = gauge => {
    return {
        type: SET_GAUGE,
        payload: gauge
    }
}


export const setLocation = location => {
    LocationTemp.push(location)
    return {
        type: SET_LOCATION,
        payload: LocationTemp
    }
}

export const setCentralIVUltrasoundForLinePlacement = CentralIVUltrasoundForLinePlacement => {
    return {
        type: SET_CENTRAL_IV_ULTRASOUND_FOR_LINE_PLACEMENT,
        payload: CentralIVUltrasoundForLinePlacement
    }
}

export const setCentralIVCatherterType = CentralIVCatherterType => {

    return {
        type: SET_CENTRAL_IV_CATHERTER_TYPE,
        payload: CentralIVCatherterType
    }
}

//SET_CENTRAL_IV_CATHERTER_TYPE_OTHER_TEXT
export const setCentralIVCatherterTypeOtherText = CentralIVCatherterTypeOtherText => {

    return {
        type: SET_CENTRAL_IV_CATHERTER_TYPE_OTHER_TEXT,
        payload: CentralIVCatherterTypeOtherText
    }
}


export const setCentralIVPulmonaryArterialCatheter = CentralIVPulmonaryArterialCatheter => {

    return {
        type: SET_CENTRAL_IV_PULMONARY_ARTERIAL_CATHETER,
        payload: CentralIVPulmonaryArterialCatheter
    }
}

export const setArterialUltrasoundForLinePlacement = ArterialUltrasoundForLinePlacement => {
    return {
        type: SET_ARTERIAL_ULTRASOUND_FOR_LINE_PLACEMENT,
        payload: ArterialUltrasoundForLinePlacement
    }
}

export const setArterialGauge = ArterialGauge => {
    return {
        type: SET_ARTERIAL_GUAGE,
        payload: ArterialGauge
    }
}

export const setArterialLoction = ArterialLoction => {
    return {
        type: SET_ARTERIAL_LOCATION,
        payload: ArterialLoction
    }
}


export const setArterialLoctionOtherList = ArterialLoctionOtherList => {
    return {
        type: SET_ARTERIAL_LOCATION_OTHER_LIST,
        payload: ArterialLoctionOtherList
    }
}

export const setPhysicalExamOtherListed = PhysicalExamOtherListed => {
    return {
        type: SET_PHYSICAL_EXAM_OTHER_LISTED,
        payload: PhysicalExamOtherListed
    }
}

export const setAuscultationMainType = auscMainTtype => {
    return {
        type: SET_AUSCULTATION_MAIN_TYPE,
        payload: auscMainTtype
    }
}

export const setAuscultationSubType = auscSubTtype => {
    return {
        type: SET_AUSCULTATION_SUB_TYPE,
        payload: auscSubTtype
    }
}

export const setAuscultationSubSubType = auscSubSubType => {
    return {
        type: SET_AUSCULTATION_SUB_SUB_TYPE,
        payload: auscSubSubType
    }
}

export const setMurmurPresent = murmurPresent => {
    return {
        type: SET_MURMUR_PRESENT,
        payload: murmurPresent
    }
}

export const setMurmurTypeLocation = murmurTypeLocation => {
    return {
        type: SET_MURMUR_TYPE_LOCATION,
        payload: murmurTypeLocation
    }
}













