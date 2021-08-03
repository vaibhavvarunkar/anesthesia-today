
import React, { useState } from 'react'
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal'
import Header from '../CustomComponent/Header'
import { Link } from 'react-router-dom'

const Bradycardia = (props) => {
    console.log(props);
    const [burgerMenu, setburgerMenu] = useState(false)
    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }
    return (
        <div>
            {/* <BurgerMenuModal modalIsOpen={burgerMenu} />
            <Header onMenuClick={() => burgerMenuClick()} /> */}
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/allaction"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>BRADYCARDIA</h4>
                <h4 className="hidn">CRISES</h4>
            </header>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    {
                        props.location.state.map((data) => {
                            console.log(data)
                            return (
                                <>
                                    <p>ID: {data.id}</p>
                                    <p>Crises ID: {data.crises_id}</p>
                                    <p>Name:{data.name}</p>
                                    <p>Confirm Diagnosis: {data.confirm_diagnosis}</p>
                                    <p>Crises Management: {data.crisis_management}</p>
                                    <p>Crises Management str: {data.crisis_management_str}</p>
                                    <p>Differential Diagnosis : {data.differential_diagnosis}</p>
                                    <p>Differential Diagnosis str: {data.differential_diagnosis_str}</p>
                                    <p>Drugs: {data.drugs}</p>
                                    <p>Drugs: {data.drugs_str}</p>
                                    <p>Miscellaneous: {data.miscellaneous}</p>
                                    <p>Miscellaneous str: {data.miscellaneous_str}</p>
                                    <p>Treatment: {data.treatment}</p>
                                    <p>Treatment str: {data.treatment_str}</p>

                                </>
                            )
                        })
                    }
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}

export default Bradycardia
