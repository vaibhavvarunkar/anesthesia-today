import React from 'react'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom'
import "../css/VascularAcccess.css"
const VascularAcess = (props) => {
    // const Location = [
    //     { value: 'Left', label: 'Left' },
    //     { value: 'Right', label: 'Right' },
    //     { value: 'Radial', label: 'Radial' },
    //     { value: 'Femoral', label: 'Femoral' },
    //     { value: 'Brachial', label: 'Brachial' },
    //     { value: 'OTHER', label: 'OTHER' },
    // ]
    const Catheter_type = [
        { value: 'Single lumen', label: 'Single lumen' },
        { value: 'Double lumen', label: 'Double lumen' },
        { value: 'Triple lumen', label: 'Triple lumen' },
        { value: 'Sheath', label: 'Sheath' },
        { value: 'SLIC', label: 'SLIC' },
        { value: 'PICC', label: 'PICC' },
        { value: 'OTHER', label: 'OTHER' }
    ]

    const Peripheral_IV = useSelector(state => (state.physicalReducer.Peripheral_IV))
    const Gauge = useSelector(state => state.physicalReducer.Gauge)
    const Location = useSelector(state => state.physicalReducer.Location)
    const Central_IV_Ultrasound_for_line_placement = useSelector(state => state.physicalReducer.Central_IV_Ultrasound_for_line_placement)
    const Central_IV_Catherter_type = useSelector(state => state.physicalReducer.Central_IV_Catherter_type)
    const Central_IV_Catherter_typeRedux = useSelector(state => state.physicalReducer.Central_IV_Catherter_type)
    const Central_IV_Pulmonary_Arterial_Catheter = useSelector(state => state.physicalReducer.Central_IV_Pulmonary_Arterial_Catheter)
    const Arterial_Ultrasound_For_Line_Placement = useSelector(state => state.physicalReducer.Arterial_Ultrasound_For_Line_Placement)
    const Arterial_Gauge = useSelector(state => state.physicalReducer.Arterial_Gauge)
    const Arterial_Location = useSelector(state => state.physicalReducer.Arterial_Location)


    return (
        <div>
            {/* <Header onMenuClick={() => burgerMenuClick()} /> */}
            {/* <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>VASCULAR ACCESS</h4>
                <h4 className="hidn">CRISES</h4>
            </header> */}
            <div className="backNavigation text-center">
            <Link className="arrow" to="/startacase/actionsummary"><span className="tooltip-arrow"><i className="fa fa-chevron-left"></i><span className="tooltiptext">Return to Action Summary</span></span></Link>VASCULAR ACCESS           
            <h4 className="hidn">CRISES</h4>
            </div>
            <div className="main-container" >
                {/* <!--style={{ display: 'flex', justifyContent: "center" }}--> */}
                <div className="physical-exam-question-container" >


                    <div className="vital-signs-input-container" >
                        <div className="blood-pressure-container" >

                            <div className="blood-pressure-container-subcontainer pad" >
                                <div>Peripheral IV</div>
                                <input value={Peripheral_IV} className="input-container" placeholder="enter Peripheral IV..." />

                            </div>

                            <div className="central-iv-subcontainer pad" >
                                <div>Gauge</div>
                                <input value={Gauge} className="input-container" placeholder="enter Gauge..." />

                            </div>

                            <div className="central-iv-subcontainer pad" >
                                <div>Location</div>
                                <Select value={Location} placeholder="select Location..." className="gender-dropdown" id="age" options={Location} />

                            </div>


                            <div className="central-iv-container pad" >
                                <div>Central IV</div>
                                <div className="central-iv-subcontainer pad" >
                                    <div>Catheter type</div>
                                    <Select value={Central_IV_Catherter_type} placeholder="select Catheter type..." className="gender-dropdown" id="age" options={Catheter_type} />

                                </div>

                                <div className="central-iv-subcontainer pad" >
                                    <div>Ultrasound for line placement</div>
                                    <div className="option-box-container pad" >
                                        <input checked={Central_IV_Ultrasound_for_line_placement === "Yes" ? true : false} type="radio" value="" name="Jaundice" /> Yes
                                        <input checked={Central_IV_Ultrasound_for_line_placement === "No" ? true : false} type="radio" value="No" name="Jaundice" /> No
                                    </div>

                                </div>

                                <div className="central-iv-subcontainer pad" >
                                    <div>Pulmonary Arterial Catheter</div>
                                    <div className="option-box-container pad" >
                                        <input checked={Central_IV_Pulmonary_Arterial_Catheter === "Yes" ? true : false} type="radio" value="" name="Jaundice" /> Yes
                                        <input checked={Central_IV_Pulmonary_Arterial_Catheter === "Yes" ? true : false} type="radio" value="No" name="Jaundice" /> No
                                    </div>

                                </div>

                            </div>

                            <div className="central-iv-container pad" >
                                <div>Arterial</div>

                                <div className="central-iv-subcontainer pad" >
                                    <div>Ultrasound for line placement</div>
                                    <div className="option-box-container pad" >
                                        <input checked={Arterial_Ultrasound_For_Line_Placement === "Yes" ? true : false} type="radio" value="" name="Jaundice" /> Yes
                                        <input checked={Arterial_Ultrasound_For_Line_Placement === "No" ? true : false} type="radio" value="No" name="Jaundice" /> No
                                    </div>

                                </div>

                                <div className="central-iv-subcontainer pad" >
                                    <div>Gauge</div>
                                    <input value={Arterial_Gauge} className="input-container" placeholder="enter Gauge..." />

                                </div>

                                <div className="central-iv-subcontainer pad" >
                                    <div>Location</div>
                                    <Select value={Arterial_Location} placeholder="select Location..." className="gender-dropdown" id="age" options={Location} />

                                </div>



                            </div>

                            <div className="blood-pressure-container-subcontainer pad" >
                                <div>OTHER/NOT LISTED</div>
                                <input className="input-container" placeholder="enter other/not listed..." />
                            </div>
                        </div>
                    </div>
                    <div className="vitalsign-next-button-container" >
                        <div className="vitalsign-next-button" >
                            BACK
                        </div>
                    </div>
                </div>
            </div>
            <div className="btn-btn">
                <a className="risk-btn">Submit</a>
            </div>
        </div>
    )
}

export default VascularAcess