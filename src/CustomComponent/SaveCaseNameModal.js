import React from 'react'
import Modal from 'react-modal'
import { useSelector } from 'react-redux';
import '../css/savecasename.css'
const SaveCaseNameModal = (props) => {
  const agee = useSelector((state) => state.casesummary.agee);
  const ageeType = useSelector((state) => state.casesummary.ageeType);
  const genderType = useSelector((state) => state.casesummary.genderType);
  const surgeryName = useSelector((state) => state.casesummary.surgeryName);
  const subSurgeryName = useSelector((state) => state.casesummary.subSurgeryName);
  const categorySurgeryName = useSelector((state) => state.casesummary.categorySurgeryName);
  const customStyles = {
    content: {
      top: '25%',
      left: '37%',
      right: 'auto',
      bottom: 'auto',
      // marginRight           : '-50%',
      backgroundColor: "#FFF",
      width: 350,
      height: 350,
      border: '1px solid orange',
      zIndex: 99
    }
  };
  var surgery_Name = subSurgeryName ? subSurgeryName.name.replaceAll(" ", "-") : categorySurgeryName ? categorySurgeryName.name.replaceAll(" ", "-") : surgeryName.name
  Modal.setAppElement('body');
  var date = new Date().toISOString().slice(0, 10).replaceAll("/", "-")
  var date2 = String(date) + "_" + String(agee) + "-" + ageeType.label + "-" + genderType.value + "-" + surgery_Name
  console.log(agee);
  return (
    <div>
      <Modal
        isOpen={props.saveVisible}
        onRequestClose={props.onClose}
        style={customStyles}
        contentLabel="Case Name Entry Modal"
      >

        <div className="savecasemodal-container" >
          <input defaultValue={date2} onChange={(e) => props.onCaseNameChange(e.target.value)} placeholder="APPENDECTOMY_12-19-2020_18YO_MALE" type="text" className="save-case-name-input ant-text-input" />
          <hr />
          <div className="action-button-container mt-2">
            <div onClick={() => { props.postRequest(); props.closeNameModal(); }} className="save-button-container" >
              Save
            </div>

            <div onClick={() => props.closeNameModal()} className="cancel-button" >
              Cancel
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default SaveCaseNameModal
