import {
    SET_CERVICAL_SPINE_MOBILITY_OTHER_TEXT, SET_BLOOD_PRESSURE_SYSTOLIC_BP,
    SET_BLOOD_PRESSURE_DIASTOLIC_BP, SET_WEIGHT, SET_HEIGHT,
    SET_BMI, SET_JAUNDICE, SET_MALLAMPATI_SCORE, SET_MOUTH_OPENING,
    SET_MOUTH_OPENING_OTHER_TEXT, SET_BEARDED,
    SET_CERVICAL_SPINE_MOBILITY, SET_TEETH, TEMPOROMANDIBULAR_JOINT_MOBILITY_OTHER_TEXT,
    SET_THROMENTAL_DISTANCE, SET_AIRWAY_OTHER_LISTED,
    SET_AUSCULTATION, SET_COUGHING, SET_THORACIC_EXPANSION,
    SET_OXYGEN_SATURATION_ON_ROOM_AIR, SET_PULMONARY_OTHER_LISTED,
    SET_PULSE_RATE, SET_AUSCULTATION_FOR_MURMURS,
    SET_EDEMA_LOWER_EXTREMITY, SET_JUGULAR_VENOUS_DISTENSION,
    SET_BP, SET_CARDIOVASCULAR_OTHER_LISTED, SET_MOTOR_AND_SENSORY_FUNCTION,
    SET_NEUROLOGIC_OTHER_LISTED, SET_NECK_CIRCUMFERENCE_LESS_THAN_42CM,
    SET_PETECHIAE, SET_BRUISING, SET_CLINICAL_EVIDENCE_OF_ANEMIA,
    SET_HEMATOLOGIC_OTHER_LISTED, SET_PERIPHERAL_IV, SET_GAUGE,
    SET_LOCATION, SET_CENTRAL_IV_ULTRASOUND_FOR_LINE_PLACEMENT, SET_MOTOR_AND_SENSORY_FUNCTION_OTHER_TEXT,
    SET_CENTRAL_IV_CATHERTER_TYPE, SET_ARTERIAL_LOCATION_OTHER_LIST, SET_COGNITIVE_FUNCTION_OTHER_TEXT, SET_CENTRAL_IV_CATHERTER_TYPE_OTHER_TEXT, SET_CENTRAL_IV_PULMONARY_ARTERIAL_CATHETER, SET_ARTERIAL_ULTRASOUND_FOR_LINE_PLACEMENT, SET_ARTERIAL_GUAGE, SET_ARTERIAL_LOCATION, SET_PHYSICAL_EXAM_OTHER_LISTED, SET_COGNITIVE_FUNCTION, SET_MOOD, SET_MOOD_OTHER_TEXT, SET_GENERAL_APPERANCE_OTHER_LIST, TEMPOROMANDIBULAR_JOINT_MOBILITY, SET_AUSCULTATION_MAIN_TYPE, SET_AUSCULTATION_SUB_TYPE, SET_AUSCULTATION_SUB_SUB_TYPE, SET_MURMUR_PRESENT, SET_MURMUR_TYPE_LOCATION
} from './PhysicalExamTypes'

const initial_state = {
    bloodPressureSystolicBP: "",
    bloodPressureDiastolicBP: "",
    Weight: "",
    Height: "",
    mood: [],
    moodOtherText: "",
    BMI: "",
    Jaundice: false,
    generalOtherListed: "",
    mallampatiScore: "",
    mouthOpening: [],
    mouthOpeningOtherText: "",
    Bearded: false,
    cervical_spine_mobility: [],
    cervical_spine_mobility_other_text: "",
    neck_circumference_less_then_42_cm: false,
    temporomandibular_joint_mobility: [],
    temporomandibular_joint_mobility_other_text: "",
    teeth: [],
    thyromental_distance: [],
    Airway_OTHER_NOT_LISTED: [],
    auscultation: [],
    Coughing: "",
    thoracic_expansion: [],
    oxygen_saturation_on_room_air: "",
    OTHER_NOT_LISTED_pulmonary: [],
    pulse_rate: "",
    auscultation_for_murmurs_No_murmur: "",
    auscultation_for_murmurs: [],
    Edema_lower_extremity: false,
    JugularVenousDistension: false,
    BP: "",
    CARDIOVASCULAR_OTHER_LISTED: "",
    Motor_and_Sensory_function: [],
    Motor_and_Sensory_function_Other_Text: "",
    cognitive_function: [],
    cognitive_function_other_text: "",
    Neurologic_OTHER: [],
    petechiae: false,
    bruising: false,
    clinical_evidence_of_anemia: false,
    hematologic_OTHER_LISTED: [],
    Peripheral_IV: "",
    Gauge: "",
    Location: [],
    Central_IV_Ultrasound_for_line_placement: false,
    Central_IV_Catherter_type: "",
    Central_IV_Catherter_type_other_text: "",
    Central_IV_Pulmonary_Arterial_Catheter: false,
    Arterial_Ultrasound_For_Line_Placement: false,
    Arterial_Gauge: "",
    Arterial_Location: [],
    Arterial_Location_Other_Text: "",
    Physical_Exam_OTHER_LISTED: [],
    auscMainType: [],
    auscSubType: [],
    auscSubSubType: [],
    murmurPresent: [],
    murmurTypeLocation: [],

}

const PhysicalExamReducer = (state = initial_state, action) => {
    switch (action.type) {
        case SET_BLOOD_PRESSURE_SYSTOLIC_BP:
            return {
                ...state,
                bloodPressureSystolicBP: action.payload
            }
        case SET_BLOOD_PRESSURE_DIASTOLIC_BP:
            return {
                ...state,
                bloodPressureDiastolicBP: action.payload
            }
        case SET_WEIGHT:
            return {
                ...state,
                Weight: action.payload
            }
        case SET_HEIGHT:
            return {
                ...state,
                Height: action.payload
            }
        case SET_MOOD:
            return {
                ...state,
                mood: action.payload
            }
        case SET_MOOD_OTHER_TEXT:
            return {
                ...state,
                moodOtherText: action.payload
            }
        case SET_BMI:
            return {
                ...state,
                BMI: action.payload
            }
        case SET_JAUNDICE:
            return {
                ...state,
                Jaundice: action.payload
            }
        case SET_GENERAL_APPERANCE_OTHER_LIST:
            return {
                ...state,
                generalOtherListed: action.payload
            }
        case SET_MALLAMPATI_SCORE:
            return {
                ...state,
                mallampatiScore: action.payload
            }
        case SET_MOUTH_OPENING:
            return {
                ...state,
                mouthOpening: action.payload
            }
        case SET_MOUTH_OPENING_OTHER_TEXT:
            return {
                ...state,
                mouthOpeningOtherText: action.payload
            }
        case SET_BEARDED:
            return {
                ...state,
                Bearded: action.payload
            }
        case SET_CERVICAL_SPINE_MOBILITY:
            return {
                ...state,
                cervical_spine_mobility: action.payload
            }
        case SET_CERVICAL_SPINE_MOBILITY_OTHER_TEXT:
            return {
                ...state,
                cervical_spine_mobility_other_text: action.payload
            }
        case SET_NECK_CIRCUMFERENCE_LESS_THAN_42CM:
            return {
                ...state,
                neck_circumference_less_then_42_cm: action.payload
            }
        case TEMPOROMANDIBULAR_JOINT_MOBILITY:
            return {
                ...state,
                temporomandibular_joint_mobility: action.payload
            }
        case TEMPOROMANDIBULAR_JOINT_MOBILITY_OTHER_TEXT:
            return {
                ...state,
                temporomandibular_joint_mobility_other_text: action.payload
            }
        case SET_TEETH:
            return {
                ...state,
                teeth: action.payload
            }
        case SET_THROMENTAL_DISTANCE:
            return {
                ...state,
                thyromental_distance: action.payload
            }
        case SET_AIRWAY_OTHER_LISTED:
            return {
                ...state,
                Airway_OTHER_NOT_LISTED: action.payload
            }
        case SET_AUSCULTATION:
            return {
                ...state,
                auscultation: action.payload
            }
        case SET_COUGHING:
            return {
                ...state,
                Coughing: action.payload
            }
        case SET_THORACIC_EXPANSION:
            return {
                ...state,
                thoracic_expansion: action.payload
            }
        case SET_OXYGEN_SATURATION_ON_ROOM_AIR:
            return {
                ...state,
                oxygen_saturation_on_room_air: action.payload
            }
        case SET_PULMONARY_OTHER_LISTED:
            return {
                ...state,
                OTHER_NOT_LISTED_pulmonary: action.payload
            }
        case SET_PULSE_RATE:
            return {
                ...state,
                pulse_rate: action.payload
            }
        case SET_AUSCULTATION_FOR_MURMURS:
            return {
                ...state,
                auscultation_for_murmurs: action.payload
            }
        case SET_EDEMA_LOWER_EXTREMITY:
            return {
                ...state,
                Edema_lower_extremity: action.payload
            }
        case SET_JUGULAR_VENOUS_DISTENSION:
            return {
                ...state,
                JugularVenousDistension: action.payload
            }
        case SET_BP:
            return {
                ...state,
                BP: action.payload
            }
        case SET_CARDIOVASCULAR_OTHER_LISTED:
            return {
                ...state,
                CARDIOVASCULAR_OTHER_LISTED: action.payload
            }
        case SET_MOTOR_AND_SENSORY_FUNCTION:
            return {
                ...state,
                Motor_and_Sensory_function: action.payload
            }
        case SET_MOTOR_AND_SENSORY_FUNCTION_OTHER_TEXT:
            return {
                ...state,
                Motor_and_Sensory_function_Other_Text: action.payload
            }
        case SET_COGNITIVE_FUNCTION:
            return {
                ...state,
                cognitive_function: action.payload
            }
        case SET_COGNITIVE_FUNCTION_OTHER_TEXT:
            return {
                ...state,
                cognitive_function_other_text: action.payload
            }
        case SET_NEUROLOGIC_OTHER_LISTED:
            return {
                ...state,
                Neurologic_OTHER: action.payload
            }
        case SET_PETECHIAE:
            return {
                ...state,
                petechiae: action.payload
            }
        case SET_BRUISING:
            return {
                ...state,
                bruising: action.payload
            }
        case SET_CLINICAL_EVIDENCE_OF_ANEMIA:
            return {
                ...state,
                clinical_evidence_of_anemia: action.payload
            }
        case SET_HEMATOLOGIC_OTHER_LISTED:
            return {
                ...state,
                hematologic_OTHER_LISTED: action.payload
            }
        case SET_PERIPHERAL_IV:
            return {
                ...state,
                Peripheral_IV: action.payload
            }
        case SET_GAUGE:
            return {
                ...state,
                Gauge: action.payload
            }
        case SET_LOCATION:
            return {
                ...state,
                Location: action.payload
            }
        case SET_CENTRAL_IV_ULTRASOUND_FOR_LINE_PLACEMENT:
            return {
                ...state,
                Central_IV_Ultrasound_for_line_placement: action.payload
            }
        case SET_CENTRAL_IV_CATHERTER_TYPE:
            return {
                ...state,
                Central_IV_Catherter_type: action.payload
            }
        case SET_CENTRAL_IV_CATHERTER_TYPE_OTHER_TEXT:
            return {
                ...state,
                Central_IV_Catherter_type_other_text: action.payload
            }
        case SET_CENTRAL_IV_PULMONARY_ARTERIAL_CATHETER:
            return {
                ...state,
                Central_IV_Pulmonary_Arterial_Catheter: action.payload
            }
        case SET_ARTERIAL_ULTRASOUND_FOR_LINE_PLACEMENT:
            return {
                ...state,
                Arterial_Ultrasound_For_Line_Placement: action.payload
            }
        case SET_ARTERIAL_GUAGE:
            return {
                ...state,
                Arterial_Gauge: action.payload
            }
        case SET_ARTERIAL_LOCATION:
            return {
                ...state,
                Arterial_Location: action.payload
            }
        case SET_ARTERIAL_LOCATION_OTHER_LIST:
            return {
                ...state,
                Arterial_Location_Other_Text: action.payload
            }
        case SET_PHYSICAL_EXAM_OTHER_LISTED:
            return {
                ...state,
                Physical_Exam_OTHER_LISTED: action.payload
            }
        case SET_AUSCULTATION_MAIN_TYPE:
            return {
                ...state,
                auscMainType: action.payload
            }
        case SET_AUSCULTATION_SUB_TYPE:
            return {
                ...state,
                auscSubType: action.payload
            }
        case SET_AUSCULTATION_SUB_SUB_TYPE:
            return {
                ...state,
                auscSubSubType: action.payload
            }
        case SET_MURMUR_PRESENT:
            return {
                ...state,
                murmurPresent: action.payload
            }
        case SET_MURMUR_TYPE_LOCATION:
            return {
                ...state,
                murmurTypeLocation: action.payload
            }
        default: return state
    }
}

export default PhysicalExamReducer